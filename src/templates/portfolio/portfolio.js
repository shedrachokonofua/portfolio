import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/no-unassigned-import
import '../../styles/global.css';

import Contact from '../../modules/contact';
import Qualifications from '../../modules/qualifications';

const Portfolio = ({
	pageContext: {
		data: {contact, qualifications},
	},
}) => {
	return (
		<div className="px-4 md:px-24 lg:px-56 xl:px-64">
			<Contact data={contact} />
			<Qualifications data={qualifications} />
		</div>
	);
};

Portfolio.propTypes = {
	pageContext: PropTypes.shape({
		data: PropTypes.shape({
			contact: PropTypes.object.isRequired,
			qualifications: PropTypes.object.isRequired,
		}).isRequired,
	}).isRequired,
};

export default Portfolio;
