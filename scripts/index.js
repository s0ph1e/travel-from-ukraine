require.config({
	baseUrl: '..',
	paths: {
		text: '../bower_components/requirejs-plugins/lib/text',
		json: '../bower_components/requirejs-plugins/src/json',
		lodash: '../bower_components/lodash/lodash.min',
		googleMaps: '../bower_components/google-maps/lib/Google.min'
	}
});

require([
	'lodash',
	'googleMaps',
	'scripts/draw-map'
], function(_, GoogleMapsLoader, drawMap) {
	GoogleMapsLoader.LIBRARIES = ['places'];
	GoogleMapsLoader.load(drawMap);
});
