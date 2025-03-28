import '@/support/plugins'
import '@/bootstrap/styles'
import '@/support/datetime'

import { SplashScreen } from '@capacitor/splash-screen'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { IonicVue } from '@ionic/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { seedDatabase } from './database/seed'
import router from './router'
import { useDatabaseStore } from './stores/database-store'

if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => console.clear())
}

const pinia = createPinia()
const app = createApp(App).use(IonicVue).use(router).use(pinia).use(autoAnimatePlugin)

router.isReady().then(async () => {
  const { initDatabase } = useDatabaseStore()

  await initDatabase()
  await seedDatabase()
  await SplashScreen.hide()

  app.mount('#app')
})
