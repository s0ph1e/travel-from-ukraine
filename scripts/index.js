require.config({
	baseUrl: '..'
});

require(['scripts/draw-map'], function(drawMap) {
	drawMap();
});
