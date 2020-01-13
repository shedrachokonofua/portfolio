import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({children, className, onClick}) => (
	<span
		className={
			'inline-block bg-gray-200 rounded-full mr-1 mt-1 px-3 py-1 text-sm font-semibold cursor-pointer ' +
			className
		}
		onClick={onClick}
	>
		{children}
	</span>
);

Badge.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
};

Badge.defaultProps = {
	onClick: () => {},
	className: '',
};

export default Badge;
