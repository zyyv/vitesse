<template>
  <div class="div500 wrapper">
    <a-result status="500"
              title="500"
              sub-title="抱歉，服务器内部错误。">
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
  name: '500',
  components: {},
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
