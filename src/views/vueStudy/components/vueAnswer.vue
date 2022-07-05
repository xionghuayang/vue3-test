<template>
	<div>
		<p>answer {{ title }}</p>
		<slot />
	</div>
</template>
<script setup>
defineOptions({
	name: 'VueAnswer'
});
defineProps({
	title: {
		type: String,
		default: ''
	}
});
</script>
<style scoped lang="scss"></style>
