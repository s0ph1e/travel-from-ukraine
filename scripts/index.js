require.config({
	baseUrl: '..'
});

require([
	'bower_components/lodash/lodash.min',
	'scripts/draw-map'
], function(_, drawMap) {
	drawMap();
});
