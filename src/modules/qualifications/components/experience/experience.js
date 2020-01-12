import React from 'react';
import PropTypes from 'prop-types';

import Company from './components/company';

const Experience = ({data}) => {
	const Items = data.map(company => (
		<Company key={company.company} data={company} />
	));

	return (
		<>
			<h1 className="text-xl">Project Portfolio</h1>
			<div className="mt-2">{Items}</div>
		</>
	);
};

Experience.propTypes = {
	data: PropTypes.array.isRequired,
};

export default Experience;
