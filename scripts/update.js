const { FACEFUSION_VERSION } = require('./config');
const { onError } = require('./utils');

module.exports = () =>
{
	const config =
	{
		run:
		[
			{
				method: 'shell.run',
				params:
				{
					message: 'git pull',
					on: onError
				}
			},
			{
				method: 'shell.run',
				params:
				{
					message: 'git pull --tags',
					path: 'facefusion',
					on: onError
				}
			},
			{
				method: 'shell.run',
				params:
				{
					message: 'git checkout ' + FACEFUSION_VERSION,
					path: 'facefusion',
					on: onError
				}
			}
		]
	};

	return config;
};
