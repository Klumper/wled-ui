import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { i18n } from './plugins/vue-i18n-next-plugin';
import { WledScss } from './plugins/wled-scss';
import { rootStore } from './store';

createApp(App)
  .use(rootStore)
  .use(i18n)
  .use(WledScss)
  .use(router)
  .mount('#app');

