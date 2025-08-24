const { FACEFUSION_VERSION } = require('./scripts/config');

module.exports =
{
	version: '1.5',
	title: 'FaceFusion ' + FACEFUSION_VERSION,
	description: 'Industry leading face manipulation platform',
	icon: 'facefusion.png',
	menu: require(__dirname + '/scripts/menu.js')
};
