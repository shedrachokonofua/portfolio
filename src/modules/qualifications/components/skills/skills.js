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

	return <div className="flex flex-wrap mb-8">{skillGroups}</div>;
};

Skills.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Skills;
