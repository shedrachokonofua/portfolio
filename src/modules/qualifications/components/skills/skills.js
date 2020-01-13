import React from 'react';
import PropTypes from 'prop-types';

import SkillGroup from './components/skill-group';

const Skills = ({data}) => {
	const skillGroupKVPairs = Object.entries(data);
	const skillGroups = skillGroupKVPairs.map(([key, skills]) => (
		<div key={key} className="w-full md:w-1/2">
			<SkillGroup id={key} skills={skills} />
		</div>
	));

	return (
		<div>
			<div className="mb-4 text-center text-xs text-gray-600">
				Click on skill to refine project portfolio
			</div>
			<div className="flex flex-wrap mb-8">{skillGroups}</div>
		</div>
	);
};

Skills.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Skills;
