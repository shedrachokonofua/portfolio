import React from 'react';
import PropTypes from 'prop-types';

const Skill = ({name}) => (
	<span className="inline-block bg-gray-200 rounded-full mr-1 mt-1 px-3 py-1 text-sm font-semibold">
		{name}
	</span>
);

Skill.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Skill;
