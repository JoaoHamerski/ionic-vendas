<script setup lang="ts">
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonToolbar,
} from '@ionic/vue'
import { arrowBackOutline } from 'ionicons/icons'
import { ref } from 'vue'

import EntriesForm from './EntriesForm.vue'

const emit = defineEmits(['submit'])
const modal = ref()

const onFormSubmit = () => {
  modal.value.$el.dismiss()

  emit('submit')
}
</script>

<template>
  <IonModal ref="modal">
    <IonHeader>
      <IonToolbar color="success">
        <IonButtons slot="start">
          <IonButton @click="modal.$el.dismiss()">
            <IonIcon
              slot="icon-only"
              :icon="arrowBackOutline"
            />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent class="ion-padding">
      <EntriesForm @submit="onFormSubmit" />
    </IonContent>
  </IonModal>
</template>

<style scoped>
ion-toolbar ion-button {
  --padding-top: 15px;
  --padding-bottom: 15px;
}
</style>
