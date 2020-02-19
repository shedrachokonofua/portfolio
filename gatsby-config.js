module.exports = {
	siteMetadata: {
		title: 'Portfolio',
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-158760915-1',
				head: true,
			},
		},
		'gatsby-plugin-postcss',
		'gatsby-plugin-react-helmet',
	],
};
