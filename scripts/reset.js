const { envPath, onError } = require('./utils');

module.exports = () =>
{
	const config =
	{
		run:
		[
			{
				method: 'fs.rm',
				params:
				{
					path: 'facefusion'
				},
				on: onError
			},
			{
				method: 'fs.rm',
				params:
				{
					path: envPath
				},
				on: onError
			}
		]
	};

	return config;
};

