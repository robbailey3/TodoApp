module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'@vue/typescript/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended',
		'plugin:boundaries/recommended',
		'prettier'
	],
	plugins: ['@typescript-eslint', 'boundaries', 'sonarjs', 'unicorn'],
	parserOptions: {
		parser: require.resolve('@typescript-eslint/parser'),
		extraFileExtensions: ['.vue'],
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: false
		}
	},
	settings: {
		'import/resolver': {
			typescript: {}
		},
		'boundaries/elements': [
			{ type: 'pages', pattern: 'pages/*' },
			{ type: 'shared', pattern: 'shared' },
			{ type: 'base', pattern: 'base' },
			{ type: 'api', pattern: 'src/app/api' },
			{ type: 'routes', pattern: 'src/routes.*', mode: 'file' }
		]
	},
	rules: {
		'no-console': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'comma-dangle': ['error', 'only-multiline'],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'vue/block-tag-newline': 'error',
		'vue/component-api-style': 'error',
		'vue/component-name-in-template-casing': 'error',
		'vue/no-child-content': 'error',
		'vue/no-duplicate-attr-inheritance': 'error',
		'vue/no-empty-component-block': 'error',
		'vue/no-expose-after-await': 'error',
		'vue/no-useless-mustaches': 'error',
		'vue/no-useless-v-bind': 'error',
		'vue/padding-line-between-blocks': 'error',
		// 'vue/no-static-inline-styles': 'error',

		// eslint-plugin-import
		'import/namespace': 'off',
		'import/no-unresolved': 'off',
		'import/export': 'off',
		'import/no-nodejs-modules': 'off',
		'import/no-duplicates': 'off',

		// sonarjs
		'sonarjs/no-unused-collection': 'off', // doesn't detect usage in templates
		'sonarjs/no-duplicate-string': 'off',

		// unicorn
		'unicorn/filename-case': [
			'error',
			{ cases: { camelCase: true, pascalCase: true } }
		],
		'unicorn/expicit-length-check': 'off',
		'unicorn/no-null': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/prefer-ternary': 'off',
		'unicorn/catch-error-name': ['error', { name: 'e' }],
		'unicorn/explicit-length-check': 'off',
		'unicorn/better-regex': 'off',
		'unicorn/numeric-separators-style': [
			'error',
			{ number: { minimumDigits: 7, groupLength: 3 } }
		],
		'unicorn/no-useless-undefined': 'off'
	},
	overrides: [
		{
			files: ['**/*.vue'],
			rules: {
				'import/no-default-export': 'off' // vue files need to export default to set inheritAttrs: false
			}
		},
		{
			files: ['**/tests/**/*.{spec,test}.{js,ts}'],
			rules: {
				'boundaries/element-types': [0]
			}
		}
	],
	ignorePatterns: ['**/*.d.ts', 'src/app/api/*.*', '**/*.js', 'docs/']
};
