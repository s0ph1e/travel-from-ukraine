require.config({
	baseUrl: '..',
	config: {
		googleAnalytics: {
			account: 'UA-71738495-1',
			domain: 'auto'
		}
	},
	paths: {
		text: '../bower_components/requirejs-plugins/lib/text',
		json: '../bower_components/requirejs-plugins/src/json',
		lodash: '../bower_components/lodash/lodash.min',
		googleMaps: '../bower_components/google-maps/lib/Google.min',
		googleAnalytics: '../bower_components/amd-google-analytics/ga'
	}
});

require([
	'lodash',
	'googleAnalytics',
	'googleMaps',
	'scripts/draw-map'
], function(_, googleAnalytics, GoogleMapsLoader, drawMap) {

	GoogleMapsLoader.LIBRARIES = ['places'];
	GoogleMapsLoader.KEY = 'GOOGLE_MAPS_API_KEY_HERE';
	GoogleMapsLoader.load(drawMap);

	googleAnalytics('send', 'pageview');
});
