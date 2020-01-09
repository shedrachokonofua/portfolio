import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unassigned-import
import '../../styles/global.css';

import Contact from '../../modules/contact';

const Portfolio = ({
	pageContext: {
		data: {contact},
	},
}) => {
	return (
		<div className="px-4 lg:px-64">
			<Contact data={contact} />
		</div>
	);
};

Portfolio.propTypes = {
	pageContext: PropTypes.shape({
		data: PropTypes.shape({
			contact: PropTypes.object.isRequired,
		}).isRequired,
	}).isRequired,
};

export default Portfolio;
