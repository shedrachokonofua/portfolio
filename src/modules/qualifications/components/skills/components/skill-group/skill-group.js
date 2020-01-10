import React from 'react';
import PropTypes from 'prop-types';

import Skill from './components/skill';

const idToTitleMapping = {
	'programming-languages': 'Languages',
	'libraries-frameworks': 'Libraries/Frameworks',
	'tools-platforms': 'Tools/Platforms',
	methodologies: 'Methodologies',
};

const SkillGroup = ({id, skills}) => {
	const title = idToTitleMapping[id];
	const skillList = skills
		.sort()
		.map(skill => <Skill key={skill} name={skill} />);

	return (
		<div className="py-2">
			<div className="text-sm">{title}</div>
			<div>{skillList}</div>
		</div>
	);
};

SkillGroup.propTypes = {
	id: PropTypes.string.isRequired,
	skills: PropTypes.array.isRequired,
};

export default SkillGroup;
