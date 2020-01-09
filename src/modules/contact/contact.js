import React from 'react';
import PropTypes from 'prop-types';

import Field from './components/field';

const Divider = () => <p className="hidden md:block mx-4">•</p>;

const Contact = ({
	data: {name, image, headline, summary, email, phone, github},
}) => {
	return (
		<div className="flex flex-col md:flex-row py-8">
			<div className="flex justify-center">
				<img src={image} className="rounded-full w-48 h-48" />
			</div>
			<div className="flex flex-col md:justify-center md:pl-8">
				<Field className="text-2xl">{name}</Field>
				<Field className="text-lg">{headline}</Field>
				<Field>{summary}</Field>
				<Field className="flex flex-col md:flex-row md:justify-center text-sm">
					<p>
						<a href={'mailto:' + email}>{email}</a>
					</p>
					<Divider />
					<p>{phone}</p>
					<Divider />
					<p>
						<a href={'https://github.com/' + github}>github/{github}</a>
					</p>
				</Field>
			</div>
		</div>
	);
};

Contact.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Contact;
