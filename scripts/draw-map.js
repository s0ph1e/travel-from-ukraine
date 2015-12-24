define([
		'googleMaps',
		'json!config/config.json',
		'json!config/countries-data.json',
		'scripts/create-legend'
	], function(GoogleMapsLoader, config, countriesData, createLegend) {

		function init() {
			GoogleMapsLoader.load(function(google) {
				var mapElement = document.getElementById('map');
				var map = new google.maps.Map(mapElement, config.mapInitOptions);

				drawCountries(map);
				addLegend(map, google.maps.ControlPosition.TOP_RIGHT);
				addContacts(map, google.maps.ControlPosition.BOTTOM_LEFT);
			});
		}

		function addLegend(map, position) {
			var legend = createLegend(countriesData);
			map.controls[position].push(legend);
		}

		function addContacts(map, position) {
			var footerElement = document.getElementById('footer');
			map.controls[position].push(footerElement);
		}

		function drawCountries(map) {
			map.data.loadGeoJson(config.geoJsonPath);
			map.data.setStyle(function(feature) {
				var name = feature.getProperty(config.countryNameProperty);
				return getCountryStyle(name);
			});
		}

		function getCountryCategory(countryName) {
			return _.findKey(countriesData, function(category) {
				return _.contains(category.countries, countryName);
			});
		}

		function getCountryStyle(countryName) {
			var category = getCountryCategory(countryName);
			var style;

			if (category) {
				style = {
					fillColor: countriesData[category].color,
					strokeWeight: 1
				};
			}

			return style || config.defaultCountryStyle;
		}

		return init;
	}
);
