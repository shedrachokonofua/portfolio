import React, {useState, createContext} from 'react';
import PropTypes from 'prop-types';

const ProjectRefinementContext = createContext();

export const ProjectRefinementProvider = ({children}) => {
	const [selectedSkills, setSelectedSkills] = useState([]);

	const isSkillSelected = skill => selectedSkills.includes(skill);
	const selectSkill = skill => setSelectedSkills([...selectedSkills, skill]);
	const unselectSkill = skill =>
		setSelectedSkills(
			selectedSkills.filter(selectedSkill => selectedSkill !== skill)
		);

	const toggleSkillSelection = skill =>
		isSkillSelected(skill) ? unselectSkill(skill) : selectSkill(skill);

	return (
		<ProjectRefinementContext.Provider
			value={{selectedSkills, isSkillSelected, toggleSkillSelection}}
		>
			{children}
		</ProjectRefinementContext.Provider>
	);
};

ProjectRefinementProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ProjectRefinementContext;
