<template>
  <main>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.name" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>
