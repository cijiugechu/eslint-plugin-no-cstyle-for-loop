const { RuleTester } = require('eslint')
const noForLoop = require('./rule')


const tester = new RuleTester({
	parserOptions: { ecmaVersion: 6 },
})

tester.run('no-cstyle-for-loop', noForLoop, {
	valid: [
		'[].filter(x => x)',
		'for (let i of []) { console.log(i) }',
	],
	invalid: [
		{
			code: 'for (let i = 0; i < 3; i++) { console.log(i) }',
			errors: [{ message: "Avoid using c-style for statement, please use for-of statement, Array.prototype.map, Array.prototype.forEach, etc." }]
		}
	],
})