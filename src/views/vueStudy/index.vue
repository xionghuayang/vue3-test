<template>
	<div>
		vue3 {{ route.params.id }}
		<component
			:is="'VueAnswer' + route.params.id"
			:title="vueTitle[route.params.id].title"
		></component>
	</div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { vueTitle } from '@/utils/data.js';
const route = useRoute();
</script>
<style scoped lang="scss"></style>
