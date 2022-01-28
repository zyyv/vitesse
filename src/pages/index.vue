<script lang="ts" setup name="Home">
import { deepClone } from '@chris-zhu/utils'
import { useUserStore } from '@s/index'
import { isDark, toggleDark, toggleLocales } from '@u/index'
const { t } = useI18n()
const { name } = storeToRefs(useUserStore())

const test = reactive(deepClone({ comon: ':' }))

</script>

<template>
  <div>
    <header f-c justify-end py-2 px-5>
      <button
        bg-inherit
        border-none
        mr-5
        @click="toggleDark"
      >
        <div
          v-if="!isDark"
          icon-btn
          class="i-carbon:light-filled"
        />
        <div
          v-else
          icon-btn
          class="i-akar-icons:moon-fill"
        />
      </button>
      <Navlink to="https://github.com/chris-zhu/modele">
        <div
          icon-btn
          mr-5
          class="i-carbon:logo-github"
        />
      </Navlink>
      <div
        icon-btn
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
        pinia userStore{{ test.comon }} <input v-model="name">
      </p>
    </div>
  </div>
</template>
