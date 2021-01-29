<template>
  <div class="div404 wrapper">
    <a-result status="404"
              title="404"
              sub-title="抱歉，您访问的页面不存在。">
      <template #extra>
        <a-button @click="backHome"
                  class="gradient-button btn">
          Back Home
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: '404',
  setup() {
    const router = useRouter()
    return {
      backHome: () => router.replace('/')
    }
  }
})
</script>
<style lang='scss' scoped>
.btn {
  border-radius: 4rem;
  &:focus {
    color: #fff !important;
  }
  &:hover {
    color: #fff !important;
  }
}
</style>
