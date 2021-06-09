import { createApp } from 'vue';
import App from './App.vue';
import FlashMessage from '@smartweb/vue-flash-message';
import router from './routes';
import store from './store';
import vClickOutside from './outside';
import { $api } from './services/api';
import { $auth } from './services/auth';

createApp(App)
  .use(router)
  .use(store)
  .use(FlashMessage)
  .directive('click-outside-new', vClickOutside)
  .provide('api', $api)
  .provide('auth', $auth)
  .mount('#app');
