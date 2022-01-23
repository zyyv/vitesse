<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div flex flex-col items-center>
    <h1 py-2>
      {{ msg }}
    </h1>

    <button type="button" @click="count++">
      count is: {{ count }}
    </button>
  </div>
</template>
