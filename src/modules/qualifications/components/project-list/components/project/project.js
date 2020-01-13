import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../../../../../../components/badge';

const Project = ({
	data: {
		name,
		description,
		highlights,
		'relevant-skills': relevantSkills,
		company,
		role,
	},
}) => {
	const Highlights = highlights.map((text, i) => (
		<li key={i.toString()}>{text}</li>
	));
	const RelevantSkills = relevantSkills
		.sort()
		.map(skill => <Badge key={skill}>{skill}</Badge>);

	return (
		<div className="max-w-full w-full card">
			<table className="table-fixed max-w-full w-full leading-none mb-4">
				<thead className="md:text-left text-xs text-gray-500">
					<tr>
						<th>Project Name</th>
						<th>Employer/Client</th>
						<th>Role</th>
					</tr>
				</thead>
				<tbody className="text-sm">
					<tr>
						<td>{name}</td>
						<td>{company}</td>
						<td>{role}</td>
					</tr>
				</tbody>
			</table>
			<div className="mb-2">{description}</div>
			<div>
				<ul className="list-disc list-inside leading-tight text-sm">
					{Highlights}
				</ul>
			</div>
			<div className="mt-2">{RelevantSkills}</div>
		</div>
	);
};

Project.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Project;
