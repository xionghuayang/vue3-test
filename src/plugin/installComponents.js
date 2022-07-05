// 批量注册VueAnswer组件 const vueFiles =
const vueFiles = import.meta.globEager('../views/vueStudy/components/*.vue');
const pathList = [];
for (const path in vueFiles) {
	pathList.push(path);
}
export default {
	install(app) {
		pathList.forEach((item) => {
			const component = vueFiles[item].default;
			app.component(component.name, component);
		});
	}
};
