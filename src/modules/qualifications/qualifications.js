import React from 'react';
import PropTypes from 'prop-types';

import Skills from './components/skills';
import Experience from './components/experience';

const Qualifications = ({data: {skills, experience}}) => {
	return (
		<>
			<Skills data={skills} />
			<Experience data={experience} />
		</>
	);
};

Qualifications.propTypes = {
	data: PropTypes.shape({
		skills: PropTypes.object.isRequired,
		experience: PropTypes.object.isRequired,
	}).isRequired,
};

export default Qualifications;
