<template>
  <div :class="styles.popup">
    <form :class="styles.popup__userForm" action="#" @submit.prevent="setUserName">
      <input :class="styles.popup__input" type="text" v-model="aboba" />
      <button :class="styles.popup__submit" type="submit">Войти</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  import styles from './styles/userForm.module.pcss'

  const emit = defineEmits<{
    (e: 'changeName', value: string): void
  }>()

  function setUserName() {
    emit('changeName', aboba.value)
  }

  const aboba = ref<string>('')
</script>
