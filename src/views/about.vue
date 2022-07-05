<template>
	<p>{{ store.count }}</p>
	<el-button type="primary" @click="store.calcCount">-</el-button>
	<el-button type="primary" @click="goHome">home</el-button>
</template>
<script setup>
// import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useStore } from '@/pinia/index.js';
const router = useRouter();
const store = useStore();
const goHome = () => {
	router.push('/');
};
</script>
<style scoped lang="scss"></style>
