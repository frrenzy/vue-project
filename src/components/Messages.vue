<template>
  <ul v-if="ok" :class="styles.messages">
    <li v-for="mes in messages" :class="styles.messages__listItem">
      <p v-if="mes.user == userName" :class="styles.messages__self">I wrote {{ mes.message }}</p>
      <p v-else :class="styles.messages__notSelf">{{ mes.user }} wrote {{ mes.message }}</p>
    </li>
  </ul>
</template>

<script lang="ts" setup>
  import { ref, reactive } from "vue";
  import { db } from "@/utils/firestore";
  import { ref as db_ref, onChildAdded } from 'firebase/database'

  import styles from './styles/messages.module.pcss'

  const props = defineProps<{
    userName: string,
    ok: boolean
  }>()

  const messages = ref([])

  onChildAdded(db_ref(db, '/posts'), snapshot => {
    console.log(snapshot.val())
    messages.value.push(snapshot.val())
    console.log(messages.value)
  })
</script>
