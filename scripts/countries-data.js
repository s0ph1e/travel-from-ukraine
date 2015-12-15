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
				'Brunei', 'Armenia', 'Guatemala', 'Tunisia', 'Turkey', 'Hong Kong', 'Grenada', 'Georgia', 'Panama',
				'Paraguay', 'Peru', 'Pitcairn Islands', 'Western Sahara', 'Israel', 'Kazakhstan', 'Kyrgyzstan',
				'Malaysia', 'Macedonia', 'Federated States of Micronesia', 'Moldova', 'Mongolia', 'Cook Islands',
				'El Salvador', 'Samoa', 'Swaziland', 'Seychelles', 'Serbia', 'Namibia', 'Nicaragua', 'Niue',
				'Tajikistan', 'Uzbekistan', 'Montenegro', 'Chile', 'Ecuador', 'Jamaica'
			]
		},
		visaInAirport: {
			color: 'yellow',
			description: 'отримання візи в аеропорту',
			countries: [
				'Macao', 'Barbados', 'Bolivia', 'Burkina Faso', 'Burundi', 'Timor-Leste', 'Mauritius', 'Madagascar',
				'Malawi', 'Maldives', 'Haiti', 'The Gambia', 'Togo', 'Tonga', 'Uganda', 'Fiji', 'Djibouti', 'Dominica',
				'Dominican Republic', 'Egypt', 'Zambia', 'Jordan', 'Cape Verde', 'Kenya', 'Comoros', 'Lao PDR',
				'Lebanon', 'Nepal', 'Saint Vincent and the Grenadines', 'Northern Cyprus', 'Tanzania', 'Thailand'
			]
		},
		electronicVisa: {
			color: 'orange',
			description: 'візу можна отримати через Інтернет',
			countries: [
				'Australia', 'Qatar', 'Cyprus', 'Kuwait', 'Bahrain', 'Botswana', 'Bhutan', 'Vanuatu',
				'São Tomé and Principe', 'Senegal', 'Saint Kitts and Nevis', 'Saint Lucia', 'Singapore', 'Syria',
				'Suriname', 'Vietnam', 'Ghana', 'Iran', 'India', 'Cambodia', 'Marshall Islands', 'Mexico',
				'United Arab Emirates', 'Papua New Guinea', 'Rwanda', 'Sri Lanka', 'South Sudan'
			]
		},
		schengenVisa: {
			color: 'tomato',
			description: 'в\'їзд з шенгенською візою',
			countries: [
				'Austria', 'Andorra', 'Belgium', 'Hungary', 'Switzerland', 'Sweden', 'Germany', 'Greece', 'Denmark',
				'Iceland', 'Spain', 'Italy', 'Malta', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Slovakia',
				'Slovenia', 'Latvia', 'Lithuania', 'Liechtenstein', 'Luxembourg', 'Finland', 'France', 'Croatia',
				'Czech Republic', 'Estonia'
			]
		}
	};
});