<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div f-c-c>
    <img w-30 :src="Logo">
    <p py-5>
      {{ msg }}
    </p>
    <button type="button" @click="count++">
      count is: {{ count }}
    </button>
  </div>
</template>
