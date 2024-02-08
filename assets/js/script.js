function sound(){
    var snd = new Audio("assets\songs\BLACK OPS 2 - OFFICIAL MULTIPLAYER MENU THEME SONG (HD).mp3")//wav is also supported
    snd.play()//plays the sound
}

// Love Quiz API
const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '618c1f6eb0msh893d6f2ef05e110p19e3f9jsnb4175e2003ee',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}