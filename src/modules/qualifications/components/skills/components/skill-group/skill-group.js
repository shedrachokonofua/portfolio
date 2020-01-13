import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import ProjectRefinementContext from '../../../../project-refinement-context';
import Badge from '../../../../../../components/badge';

const idToTitleMapping = {
	'programming-languages': 'Languages',
	'libraries-frameworks': 'Libraries/Frameworks',
	'tools-platforms': 'Tools/Platforms',
	methodologies: 'Methodologies',
};

const SkillGroup = ({id, skills}) => {
	const {toggleSkillSelection, isSkillSelected} = useContext(
		ProjectRefinementContext
	);

	const title = idToTitleMapping[id];
	const skillList = skills.sort().map(skill => {
		const selectSkill = () => toggleSkillSelection(skill);

		return (
			<Badge
				key={skill}
				isHighlighted={isSkillSelected(skill)}
				onClick={selectSkill}
			>
				{skill}
			</Badge>
		);
	});

	return (
		<div className="py-2">
			<div className="text-sm leading-tight text-gray-800">{title}</div>
			<div>{skillList}</div>
		</div>
	);
};

SkillGroup.propTypes = {
	id: PropTypes.string.isRequired,
	skills: PropTypes.array.isRequired,
};

export default SkillGroup;
