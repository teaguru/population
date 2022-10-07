let countries = ['Bulgaria', 'State of Palestine', 'Brazil', 'Guam', 'Liechtenstein', 'Burundi', 'Greece', 'Chile', 'Hungary', 'French Guiana', 'Switzerland', 'Jordan', 'Tonga', 'Réunion', 'Bhutan', 'Namibia', 'Pakistan', 'Finland', 'Montenegro', 'Saint Helena ex. dep.', 'United Kingdom of Great Britain and Northern Ireland', 'American Samoa', 'Gabon', 'Maldives', 'Zambia', 'Gibraltar', 'Falkland Islands (Malvinas)', 'Sao Tome and Principe', 'New Caledonia', 'Slovakia', 'San Marino', 'Kuwait', 'Jamaica', 'Denmark', 'Åland Islands', 'Iran (Islamic Republic of)', 'Spain', 'Belgium', 'Australia', 'Trinidad and Tobago', 'Andorra', 'Slovenia', 'Marshall Islands', 'Lithuania', 'Botswana', 'Holy See', 'Italy', 'Niue', 'Saudi Arabia', 'Uzbekistan', 'Costa Rica', 'Madagascar', 'TFYR of Macedonia', 'Portugal', 'Thailand', 'Dominican Republic', 'French Polynesia', 'Luxembourg', 'Malaysia', 'Jersey', 'Colombia', 'Venezuela (Bolivarian Republic of)', 'Philippines', 'Netherlands', 'China', 'China, Hong Kong SAR', 'Japan', 'Lebanon', 'Kenya', 'Timor-Leste', 'Eritrea', 'Faeroe Islands', 'Isle of Man', 'Bahrain', 'Saint Pierre and Miquelon', 'Indonesia', 'Malawi', 'India', 'Mauritania', 'Bolivia (Plurinational State of)', 'Nepal', 'Azerbaijan', 'Mongolia', 'Uganda', 'New Zealand', 'Czech Republic', 'Russian Federation', 'Latvia', 'Martinique', 'El Salvador', 'Romania', 'Northern Mariana Islands', 'Bahamas', 'Turkey', 'Guatemala', 'France', 'Republic of Korea', 'Bangladesh', 'Germany', 'Ghana', 'Rwanda', 'Fiji', 'Cayman Islands', 'Kazakhstan', 'Albania', 'Ireland', 'Puerto Rico', 'Belarus', 'Cuba', 'United States of America', 'Niger', 'Senegal', 'Mauritius', 'Pitcairn', 'Tuvalu', 'Guyana', 'South Africa', 'Gambia', 'Israel', 'Bermuda', 'United Republic of Tanzania', 'Norway', 'Zimbabwe', 'Oman', 'Austria', 'Ecuador', 'Honduras', 'Singapore', 'Sweden', 'Myanmar', 'Burkina Faso', 'Croatia', 'Qatar', 'Suriname', 'Poland', 'Serbia', 'Georgia', 'Papua New Guinea', 'Ukraine', 'Canada', 'Tajikistan', 'Sri Lanka', 'Bosnia and Herzegovina', 'Aruba', 'Armenia', 'Malta', 'Peru', 'Nicaragua', 'Saint Lucia', "Democratic People's Republic of Korea", 'China, Macao SAR', 'Lesotho', 'Guadeloupe', 'Mexico', 'Republic of South Sudan', 'Brunei Darussalam', 'Uruguay', 'Egypt', 'Kyrgyzstan', 'Iceland', 'Greenland', 'Republic of Moldova', 'Estonia']

countries = countries.sort(function(a, b) { return (a > b ? 1 : (a === b ? 0 : -1)) })


let countrySelect = document.querySelector('#select-country');
let countryButton = document.querySelector('.form-btn');

for (let i = 0; i < countries.length; i++) {
  let el = document.createElement("option");
  el.textContent = countries[i];
  el.value = countries[i];  
  countrySelect.appendChild(el);
}

let selectedValue = countrySelect.value

countrySelect.addEventListener('change', function() {
selectedValue = this.value  
});

countryButton.addEventListener('click', function() {
event.preventDefault()
console.log(selectedValue) 
});







