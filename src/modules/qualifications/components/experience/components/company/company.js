import React from 'react';
import PropTypes from 'prop-types';

import Project from './components/project';

const Company = ({data: {company, role, projects}}) => {
	const Projects = projects.map(project => (
		<Project key={project.name} data={project} company={company} role={role} />
	));

	return <div>{Projects}</div>;
};

Company.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Company;
