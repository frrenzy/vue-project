<script lang="ts" setup>
import { ref } from 'vue'

import MessageForm from '@/components/MessageForm.vue'
import UserForm from "@/components/UserForm.vue";
import Messages from '@/components/Messages.vue'

import styles from './styles/app.module.pcss'

const username = ref('')
const ok = ref(false)
</script>

<template>
  <header :class="styles.header">My/Our chat</header>
  <UserForm v-if="!ok" @changeName="v => { username = v; ok = true }" :user-name="username" />
  <Messages :user-name="username" :ok="ok"/>
  <MessageForm :user-name="username" />
</template>

