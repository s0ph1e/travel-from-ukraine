define([
		'bower_components/lodash/lodash.min',
		'bower_components/google-maps/lib/Google.min',
		'scripts/config',
		'scripts/countries-data'
	], function(_, GoogleMapsLoader, config, countriesData) {

		function init() {
			GoogleMapsLoader.load(function(google) {
				var map = new google.maps.Map(document.getElementById('map'), config.mapInitOptions);
				loadCountriesToMap(map);
				setStylesForCountries(map);
			});
		}

		function loadCountriesToMap(map) {
			map.data.loadGeoJson(config.geoJsonPath);
		}

		function setStylesForCountries(map) {
			map.data.setStyle(function(feature) {
				var name = feature.getProperty('name');
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
				}
			}

			return style || config.defaultCountryStyle;
		}

		return init;
	}
);