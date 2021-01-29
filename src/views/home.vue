<template>
  <div>
    <Scroller :data="data"
              ref="scc"
              class="scroller-wrapper">
      <div>
        <div v-for="index in data"
             :key="index">{{index}}</div>
      </div>
    </Scroller>
    <Scroller :data="data"
              scrollX
              :scrollY='false'
              class="scroller-wrappers">
      <div style="display:inline-flex;flex-wrap:nowrap;">
        <div class="aa"
             v-for="index in data"
             :key="index">{{index}}</div>
      </div>
    </Scroller>
  </div>
</template>

<script lang='ts'>
import { defineComponent, nextTick, reactive, ref } from 'vue'
import Scroller from '/@c/Scroller/index.vue'
export default defineComponent({
  name: 'home',
  components: { Scroller },
  setup() {
    const scc = ref<any>(null)
    nextTick(() => {
      console.log(scc.value)
      setTimeout(() => {
        // scc.value.scrollInstance.disable()
      }, 200)
    })
    const data = reactive([
      1,
      2,
      3,
      4,
      5,
      6,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ])
    return { data, scc }
  }
})
</script>

<style lang='scss' scoped>
.scroller-wrapper {
  // width: 500px;
  border: 1px solid #ccc;
  height: 200px;
  overflow: hidden;
}
.scroller-wrappers {
  width: 400px;
  border: 1px solid #ccc;
  white-space: nowrap;
  overflow: hidden;
  .aa {
    // display: inline-block;
    width: 50px;
    height: 50px;
  }
}
</style>