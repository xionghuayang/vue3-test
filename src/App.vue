<script setup>
import variables from '@/assets/styles/variables.module.scss';
import { onUnmounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { vueTitle } from '@/utils/data.js';
const router = useRouter();
const route = useRoute();
const isCollapse = ref(false);
const vueQuestion = ref(vueTitle);

const defaultActiveIndex = ref('/home');
const showFold = ref(true);
const changeMenuStatus = () => {
	isCollapse.value = !isCollapse.value;
};
const goHome = () => {
	router.push('/home');
};
watch(
	() => route.path,
	(val, oval) => {
		defaultActiveIndex.value = val;
	}
	// { deep: true, immediate: true }
);
let timer = null;
const resize = (e) => {
	if (timer) clearTimeout(timer);
	timer = setTimeout(() => {
		if (e.currentTarget.innerWidth <= 750) {
			isCollapse.value = true;
			showFold.value = false;
		} else {
			showFold.value = true;
		}
	}, 1000);
};
if (window.innerWidth <= 750) {
	isCollapse.value = true;
	showFold.value = false;
}
window.addEventListener('resize', resize);
onUnmounted(() => {
	window.removeEventListener('resize', resize);
});
</script>
<template>
	<div class="layout-container">
		<el-container>
			<el-aside :width="isCollapse ? '56px' : '200px'">
				<el-menu
					:default-active="defaultActiveIndex"
					:collapse="isCollapse"
					:collapse-transition="false"
					:router="true"
					:background-color="variables.menuBackground"
					:text-color="variables.menuColor"
				>
					<el-menu-item index="/home">
						<el-icon><House /></el-icon>
						<template #title>首页</template>
					</el-menu-item>
					<el-sub-menu index="/vue">
						<template #title>
							<el-icon><Reading /></el-icon>
							<span>Vue 面试题</span>
						</template>
						<el-menu-item
							:index="'/vue/' + index"
							v-for="(item, index) in vueQuestion"
							:key="item.title"
						>
							<template #title>
								<div class="overLine1">
									{{ item.title }}
								</div>
							</template>
						</el-menu-item>
					</el-sub-menu>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<el-icon size="30px" @click="changeMenuStatus" v-show="showFold">
						<Expand v-show="isCollapse" />
						<Fold v-show="!isCollapse" />
					</el-icon>
					<p class="title" @click="goHome">花样的个人学习网站</p>
				</el-header>
				<el-main>
					<el-scrollbar>
						<router-view></router-view>
					</el-scrollbar>
				</el-main>
				<el-footer>
					<div class="site-footer">
						<span class="copyright"
							>Copyright © 2022 huayang All Rights Reserved</span
						>
						<a href="https://beian.miit.gov.cn" class="link" target="_blank"
							>豫ICP备2021019599号-1</a
						>
					</div>
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
p {
	margin: 0;
}
a {
	text-decoration: none;
}
.overLine1 {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
<style scoped lang="scss">
@import '@/assets/styles/variables.module.scss';
.layout-container {
	width: 100vw;
	height: 100vh;
}
.copyright {
	margin-right: 20px;
}
.site-footer {
	color: #fff;
	text-align: center;
	.link {
		color: #fff;
	}
}
.el-container {
	height: 100%;
}
.el-header {
	display: flex;
	align-items: center;
	background-color: $base-menu-background;
	color: #fff;
	.el-icon {
		cursor: pointer;
	}
	.title {
		flex: 1;
		text-align: center;
		line-height: 60px;
		white-space: nowrap;
	}
}
.el-aside {
	background-color: $base-menu-background;
	color: #fff;
	.el-menu {
		border: none;
	}
}
.el-main {
	padding: 0px;
}
.el-footer {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: $base-menu-background;
	color: #fff;
}
</style>
