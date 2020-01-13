import React from 'react';
import PropTypes from 'prop-types';

const Field = ({className, children}) => {
	return (
		<div className={'mb-1 text-center md:text-left ' + className}>
			{children}
		</div>
	);
};

Field.propTypes = {
	className: PropTypes.string,
	children: PropTypes.isRequired,
};

Field.defaultProps = {
	className: '',
};

export default Field;
