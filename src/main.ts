import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);

import Router from './router';

// 引入全局组件
import ModuleSlot from './components/ModuleSlot.vue';
// 注册全局组件
app.component('ModuleSlot', ModuleSlot);

app.use(Router);
app.use(ArcoVue);

app.mount('#app');
