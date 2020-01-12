import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({children}) => (
	<span className="inline-block bg-gray-200 rounded-full mr-1 mt-1 px-3 py-1 text-sm font-semibold">
		{children}
	</span>
);

Badge.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Badge;
