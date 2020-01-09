import React from 'react';
import PropTypes from 'prop-types';

const Portfolio = ({pageContext: {data}}) => <>Hello {data.contact.name}</>;

Portfolio.propTypes = {
	pageContext: PropTypes.shape({
		data: PropTypes.shape({
			contact: PropTypes.shape({
				name: PropTypes.string.isRequired,
			}).isRequired,
		}).isRequired,
	}).isRequired,
};

export default Portfolio;
