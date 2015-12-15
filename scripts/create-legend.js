define(function() {

	function createNode(color, text) {
		var containerElement = document.createElement('div');

		var colorElement = document.createElement('span');
		colorElement.classList.add('legend-item-designation');
		colorElement.style.backgroundColor = color;

		var textElement = document.createElement('span');
		textElement.classList.add('legend-item-text');
		textElement.appendChild(document.createTextNode(text));

		containerElement.appendChild(colorElement);
		containerElement.appendChild(textElement);

		return containerElement;
	}

	function buildLegend(countriesData) {
		var legendElement = document.createElement('div');
		legendElement.classList.add('legend-container');

		_.forIn(countriesData, function(category) {
			var item = createNode(category.color, category.description);
			legendElement.appendChild(item);
		});

		return legendElement;
	}

	return buildLegend;
});
