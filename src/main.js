import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import { createPinia } from 'pinia';
import 'normalize.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import intstallComponents from '@/plugin/installComponents.js';
const pinia = createPinia();

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
app
	.use(router)
	.use(pinia)
	.use(ElementPlus, { size: 'small', zIndex: 3000 })
	.use(intstallComponents)
	.mount('#app');
