import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({children, onClick, isHighlighted}) => {
	const badgeColor = 'gray-600';
	const border = isHighlighted ? 'border-white' : `border-${badgeColor}`;
	const fontWeight = isHighlighted ? 'font-bold' : 'font-light';

	return (
		<span
			className={
				'inline-block text-white rounded-full mr-1 mt-1 px-1 leading-snug text-sm cursor-pointer shadow-md border-2 ' +
				`bg-${badgeColor} ${border} ${fontWeight}`
			}
			onClick={onClick}
		>
			{children}
		</span>
	);
};

Badge.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	isHighlighted: PropTypes.bool,
};

Badge.defaultProps = {
	onClick: () => {},
	isHighlighted: false,
};

export default Badge;
