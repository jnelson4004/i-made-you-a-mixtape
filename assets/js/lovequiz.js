// // Love Quiz API
// function loveQuiz() {
// var firstName = document.getElementById("firstName");
// var secondName = document.getElementById("secondName");
// var calculateBtn = document.getElementById("calculate");
// var results = document.getElementById("results");

// const url = "https://love-calculator.p.rapidapi.com/getPercentage?sname=" + firstName + "&fname=" + secondName;

// const options = {
// 	    method: 'GET',
// 	    headers: {
// 		    'X-RapidAPI-Key': '618c1f6eb0msh893d6f2ef05e110p19e3f9jsnb4175e2003ee',
// 		    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
// 	    }
//     };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }