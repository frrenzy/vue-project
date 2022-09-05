<template>
  <form action="#" :class="styles.messageForm" @submit.prevent="sendMessage">
    <input v-model="message" type="text" :class="styles.messageForm__input"/>
    <button type="submit" :class="styles.messageForm__submit">Отправить</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { db } from '@/utils/firestore'
import { ref as db_ref, update } from 'firebase/database'

import styles from './styles/messageForm.module.pcss'

const props = defineProps<{
  userName: string
}>()

const message = ref('')

function sendMessage() {
  console.log(message.value, props.userName)
  //document.querySelector('.').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  update(db_ref(db, 'posts/' + Date.now()), {
    user: props.userName,
    message: message.value
  })
  message.value = ''
}
</script>
