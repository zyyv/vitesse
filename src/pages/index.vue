<script lang="ts" setup name="Home">
import { useUserStore } from '@s'

const router = useRouter()
const { name } = storeToRefs(useUserStore())
</script>

<template>
  <div>
    <HelloWorld msg="I'm Hello World Component" />
    <div pr w-100 h-100>
      <div p-c>
        <img :src="Logo">
      </div>
    </div>
    <div p-c class="i-logos-vue text-3xl" />
    <p text-xxl font-lobster>
      >>===
    </p>
    <div mt-8 flex flex-col items-center>
      <button px-4 py-2 text-blue @click="router.push('/about')">
        About
      </button>
      <img :src="Logo">
      <p>pinia userStore: <input v-model="name"></p>
    </div>
  </div>
</template>
