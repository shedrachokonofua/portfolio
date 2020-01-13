import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import ProjectRefinementContext from '../../project-refinement-context';
import Project from './components/project';

const refineProjectsBySkills = (projects, skills) => {
	if (skills.length === 0) return projects;
	return projects.filter(({'relevant-skills': relevantSkills}) =>
		relevantSkills.some(relevantSkill => skills.includes(relevantSkill))
	);
};

const ProjectList = ({data}) => {
	const {selectedSkills} = useContext(ProjectRefinementContext);

	const projects = data
		.map(({company, role, projects}) =>
			projects.map(project => ({...project, company, role}))
		)
		.flat();
	const refinedProjects = refineProjectsBySkills(projects, selectedSkills);

	const Projects = refinedProjects.map(project => (
		<Project key={project.name} data={project} />
	));

	return (
		<>
			<h1 className="text-xl">Project Portfolio ({refinedProjects.length})</h1>
			<div className="mt-2">{Projects}</div>
		</>
	);
};

ProjectList.propTypes = {
	data: PropTypes.array.isRequired,
};

export default ProjectList;
