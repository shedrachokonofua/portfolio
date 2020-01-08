const test = require('ava');
const validate = require('./validate');

test('schema - validate - should pass valid data', t => {
	const testData = {
		contact: {
			name: 'Test Subject',
			role: 'Test Role',
			email: 'test@test.com',
			phone: '2898009000',
			website: 'https://test.com',
			github: 'test',
		},
		skills: {
			'programming-languages': ['Javascript'],
			'libraries-framworks': ['React'],
			'tools-platforms': ['Docker'],
			methodologies: ['TDD'],
		},
		expirience: [
			{
				company: 'Test Company',
				start: '2019-01-01',
				end: '2019-02-01',
				role: 'Test Role',
				accomplishments: ['Tested things'],
			},
		],
		education: {
			degree: 'B.Eng Testing',
			school: 'Test College',
		},
	};

	const valid = validate(testData);
	if (!valid) console.log(validate.errors);
	t.true(valid);
});
