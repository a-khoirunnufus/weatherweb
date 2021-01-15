const url = 'http://api.weatherapi.com/v1';
const apikey = '3cc487590364430c863130218211301';

export function getCurrentFromAPI() {
	fetch(url+'/current.json?key='+apikey+'&q=jakarta,indonesia')
		.then(response => response.json())
  	.then(data => console.log(data));
}