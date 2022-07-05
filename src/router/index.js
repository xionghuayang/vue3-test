import { createRouter, createWebHashHistory } from 'vue-router';
export const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: () => import('@/views/home.vue')
	},
	{
		path: '/about',
		component: () => import('@/views/about.vue')
	},
	{
		path: '/vue/:id',
		component: () => import('@/views/vueStudy/index.vue')
	}
];
const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes // `routes: routes` 的缩写
});
export default router;
