<template>
  <main class="text-gray-700 dark:text-[#afbac6]">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>
