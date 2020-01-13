import React from 'react';
import PropTypes from 'prop-types';

import Field from './components/field';

const Divider = () => <p className="hidden md:block mx-4">•</p>;

const Contact = ({data: {name, image, headline, summary, email, github}}) => {
	return (
		<div className="flex flex-col md:flex-row py-8">
			<div className="flex flex-shrink-0 justify-center">
				<img src={image} className="rounded-full w-48 h-48" />
			</div>
			<div className="flex flex-col md:justify-center md:pl-8 text-gray-800">
				<Field className="text-2xl font-bold">{name}</Field>
				<Field className="text-lg">{headline}</Field>
				<Field>{summary}</Field>
				<Field className="flex flex-col md:flex-row text-sm font-bold">
					<p>
						<a href={'mailto:' + email} className="underline">
							{email}
						</a>
					</p>
					<Divider />
					<p>
						<a href={'https://github.com/' + github} className="underline">
							github/{github}
						</a>
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
