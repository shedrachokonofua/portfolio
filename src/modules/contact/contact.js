import React from 'react';
import PropTypes from 'prop-types';

import Field from './components/field';

const Divider = () => <p className="hidden lg:block mx-4">•</p>;

const Contact = ({
	data: {name, image, headline, summary, email, phone, github},
}) => {
	return (
		<div className="pt-8">
			<Field className="flex justify-center">
				<img src={image} className="rounded-full w-48 h-48" />
			</Field>
			<Field className="text-2xl">{name}</Field>
			<Field className="text-lg">{headline}</Field>
			<Field>{summary}</Field>
			<Field className="flex flex-col lg:flex-row lg:justify-center text-sm">
				<p>{email}</p>
				<Divider />
				<p>{phone}</p>
				<Divider />
				<p>
					<a href={'https://github.com/' + github}>github/{github}</a>
				</p>
			</Field>
		</div>
	);
};

Contact.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Contact;
