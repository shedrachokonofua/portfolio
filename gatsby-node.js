const validate = require('./schema/validate');
const data = require('./data/data');

module.exports.createPages = async ({actions: {createPage}}) => {
	const dataValidation = validate(data);
	if (!dataValidation) throw new Error(validate.errors);

	createPage({
		path: '/',
		component: require.resolve('./src/templates/portfolio/'),
		context: {data},
	});
};
