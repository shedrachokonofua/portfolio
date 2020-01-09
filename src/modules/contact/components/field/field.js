import React from 'react';
import PropTypes from 'prop-types';

const Field = ({className, children}) => {
	return <div className={'mb-2 text-center ' + className}>{children}</div>;
};

Field.propTypes = {
	className: PropTypes.string,
	children: PropTypes.isRequired,
};

Field.defaultProps = {
	className: '',
};

export default Field;
