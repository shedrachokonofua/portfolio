const test = require('ava');
const validate = require('./validate');
const fixture = require('./sample.json');

test('schema - validate - should pass valid data', t => {
	const valid = validate(fixture);
	if (!valid) console.log(validate.errors);
	t.true(valid);
});
