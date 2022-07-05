module.exports = {
	env: {
		browser: true,
		es2021: true
		// 'vue/setup-compiler-macros': true
	},
	globals: {
		defineOptions: 'readonly'
	},
	extends: [
		'plugin:vue/essential',
		'standard',
		// 1、接入prettier的规则
		'prettier',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	// 2、加入 prettier 的 eslint 插件
	plugins: ['vue', 'prettier'],
	rules: {
		// 3. 注意要加上这一句，开启 prettier 自动修复的功能
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'vue/no-multiple-template-root': 'off',
		'vue/multi-word-component-names': 'off'
	}
};
