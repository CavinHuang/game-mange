import { createSSRApp } from 'vue';
import App from './App.vue';

import 'scss-reset/_reset.scss';

export const createApp = () => {
  const app = createSSRApp(App);
  return { app };
};
