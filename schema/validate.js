const Ajv = require('ajv');
const schema = require('./schema.json');

const ajv = new Ajv();
const validate = ajv.compile(schema);

module.exports = validate;
