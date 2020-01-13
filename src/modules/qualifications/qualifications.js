import React from 'react';
import PropTypes from 'prop-types';

import {ProjectRefinementProvider} from './project-refinement-context';
import Skills from './components/skills';
import ProjectList from './components/project-list';

const Qualifications = ({data: {skills, experience}}) => {
	return (
		<ProjectRefinementProvider>
			<Skills data={skills} />
			<ProjectList data={experience} />
		</ProjectRefinementProvider>
	);
};

Qualifications.propTypes = {
	data: PropTypes.shape({
		skills: PropTypes.object.isRequired,
		experience: PropTypes.object.isRequired,
	}).isRequired,
};

export default Qualifications;
