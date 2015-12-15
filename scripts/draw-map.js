define([
		'bower_components/google-maps/lib/Google.min',
		'scripts/config',
		'scripts/countries-data',
		'scripts/create-legend'
	], function(GoogleMapsLoader, config, countriesData, createLegend) {

		var mapElement = document.getElementById('map');

		function init() {
			GoogleMapsLoader.load(function(google) {
				var map = new google.maps.Map(mapElement, config.mapInitOptions);
				loadCountriesToMap(map);
				setStylesForCountries(map);

				var legend = createLegend(countriesData);
				map.controls[google.maps.ControlPosition.TOP_RIGHT].push(legend);
			});
		}

		function loadCountriesToMap(map) {
			map.data.loadGeoJson(config.geoJsonPath);
		}

		function setStylesForCountries(map) {
			map.data.setStyle(function(feature) {
				var name = feature.getProperty('name_long');
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