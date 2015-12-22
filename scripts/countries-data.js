define(function () {
	return {
		home: {
			color: 'blue',
			description: 'Україна',
			countries: ['Ukraine']
		},
		internalPassport: {
			color: 'aquamarine',
			description: 'в\'їзд за внутрішнім паспортом',
			countries: ['Belarus', 'Russian Federation']
		},
		internationalPassport: {
			color: 'green',
			description: 'в\'їзд за закордонним паспортом',
			countries: [
				'Azerbaijan', 'Albania', 'Antigua and Barbuda', 'Argentina', 'Bosnia and Herzegovina', 'Brazil',
				'Brunei', 'Armenia', 'Guatemala', 'Tunisia', 'Turkey', 'Hong Kong', 'Georgia', 'Panama',
				'Paraguay', 'Peru', 'Pitcairn Islands', 'Western Sahara', 'Israel', 'Kazakhstan', 'Kyrgyzstan',
				'Malaysia', 'Macedonia', 'Federated States of Micronesia', 'Moldova', 'Mongolia', 'Cook Islands',
				'El Salvador', 'Samoa', 'Swaziland', 'Seychelles', 'Serbia', 'Namibia', 'Nicaragua', 'Niue',
				'Tajikistan', 'Uzbekistan', 'Montenegro', 'Chile', 'Ecuador', 'Jamaica', 'Vanuatu', 'Haiti', 'Honduras',
				'Dominica', 'Dominican Republic'
			]
		},
		visaInAirport: {
			color: 'yellow',
			description: 'отримання візи в аеропорту',
			countries: [
				'Macao', 'Barbados', 'Bolivia', 'Burundi', 'Timor-Leste', 'Mauritius', 'Madagascar',
				'Malawi', 'Maldives', 'Togo', 'Tonga', 'Uganda', 'Fiji', 'Djibouti', 'Egypt', 'Zambia', 'Jordan',
				'Cape Verde', 'Kenya', 'Comoros', 'Lao PDR',
				'Lebanon', 'Nepal', 'Saint Vincent and the Grenadines', 'Northern Cyprus', 'Tanzania', 'Thailand',
				'Guinea-Bissau', 'Grenada'
			]
		},
		electronicVisa: {
			color: 'orange',
			description: 'візу можна отримати через Інтернет',
			countries: [
				'Australia', 'Cyprus', 'Kuwait', 'Bahrain', 'Bhutan',
				'São Tomé and Principe', 'Senegal', 'Saint Kitts and Nevis', 'Saint Lucia', 'Singapore', 'Syria',
				'Suriname', 'Ghana', 'India', 'Cambodia', 'Marshall Islands', 'Mexico',
				'United Arab Emirates', 'Papua New Guinea', 'Rwanda', 'Sri Lanka', 'South Sudan'
			]
		},
		schengenVisa: {
			color: 'tomato',
			description: 'в\'їзд з шенгенською візою',
			countries: [
				'Austria', 'Andorra', 'Belgium', 'Hungary', 'Switzerland', 'Sweden', 'Germany', 'Greece', 'Denmark',
				'Spain', 'Italy', 'Malta', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Slovakia',
				'Slovenia', 'Latvia', 'Lithuania', 'Liechtenstein', 'Luxembourg', 'Finland', 'France', 'Croatia',
				'Czech Republic', 'Estonia', 'Vatican'
			]
		},
		otherVisaNeeded: {
			color: 'maroon',
			description: 'потрібна віза',
			countries: [
				'Algeria', 'Angola', 'Afghanistan', 'Bahamas', 'Bangladesh', 'Bahrain', 'Belize', 'Benin', 'Bermuda',
				'Bulgaria', 'Botswana', 'Burkina Faso', 'United Kingdom', 'Venezuela', 'Vietnam', 'Gabon', 'Guyana',
				'The Gambia', 'Ghana', 'Guinea', 'Equatorial Guinea', 'Eritrea', 'Ethiopia', 'Yemen', 'Zimbabwe',
				'Indonesia', 'Iraq', 'Iran', 'Ireland', 'Iceland', 'Cameroon', 'Canada', 'Qatar'
			]
		}
	};
});