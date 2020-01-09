import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unassigned-import
import '../../styles/global.css';

const Portfolio = ({pageContext: {data}}) => {
	const contactName = data.contact.name;

	return <div className="px-4 lg:px-64">{contactName}</div>;
};

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
