import { createApp } from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
createApp.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
createApp.use(IconsPlugin)
createApp.config.productionTip = false
new createApp({
  render: h => h(App),
}).$mount('#app')

export const eventBus = new createApp ()
createApp(App).mount('#app')
