<script lang="ts" setup name="Home">
import { useUserStore } from '@s/index'
import { toggleLocales } from '@u/index'
const { t } = useI18n()
const { name } = storeToRefs(useUserStore())
</script>

<template>
  <div>
    <header f-c justify-end py-2 px-5>
      <Navlink to="https://github.com/chris-zhu/modele">
        <div
          hover="text-lightblue cursor-pointer"
          text-black-800
          w-6
          h-6
          mr-5
          class="i-carbon:logo-github"
        />
      </Navlink>
      <div
        text-black-800
        hover="text-lightblue cursor-pointer"
        w-6
        h-6
        class="i-carbon:language"
        @click="toggleLocales"
      />
    </header>
    <div b-1 p-4 f-c>
      <HelloWorld :msg="t('hello.msg')" />
    </div>
    <div f-c-c>
      <p mt-10 text="xl center" font-lobster>
        {{ t("intro.desc") }}
      </p>
      <Navlink to="/about">
        <button mt-10 px-4 py-2 text-blue>
          {{ t("button.about") }}
        </button>
      </Navlink>
      <p mt-10>
        pinia userStore: <input v-model="name">
      </p>
    </div>
  </div>
</template>
