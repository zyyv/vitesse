<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'layout',
  components: {},
  setup() {
    return {}
  }
})
</script>

<style lang='scss' scoped>
</style>