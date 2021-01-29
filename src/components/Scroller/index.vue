<template>
  <div ref="wrapper">
    <slot />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, nextTick, watch, onBeforeUnmount } from 'vue'
import BScroll, { BScrollInstance, Options } from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel' //插件
BScroll.use(MouseWheel)

// https://better-scroll.github.io/docs/zh-CN/  bs APi

function _init(elm: HTMLElement | string, option: Options): BScrollInstance {
  const scroll = new BScroll(elm, { ...option })
  return scroll
}

export default defineComponent({
  name: 'Scroller',
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 3
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启纵向滚动
     */
    scrollY: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  setup(props, ctx) {
    const wrapper = ref<HTMLElement | null>(null) // dom
    const scrollInstance = ref<BScrollInstance | null>(null) // BScroll 暴露对外接口
    nextTick(() => {
      scrollInstance.value = _init(wrapper.value as HTMLElement, {
        probeType: props.probeType,
        click: props.click,
        scrollX: props.scrollX,
        scrollY: props.scrollY,
        mouseWheel: true
      })
      if (props.listenScroll) {
        scrollInstance.value.on('scroll', (pos: any) => {
          ctx.emit('scroll', pos)
        })
      }
    })
    watch(props.data, () => {
      // data更新，滚动刷新
      setTimeout(
        scrollInstance.value && scrollInstance.value.refresh,
        props.refreshDelay
      )
    })
    onBeforeUnmount(() => {
      // 卸载
      scrollInstance.value && scrollInstance.value.destroy()
    })

    return { wrapper, scrollInstance }
  }
})
</script>