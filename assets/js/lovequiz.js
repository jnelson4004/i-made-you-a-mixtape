// Love Quiz API

// Fetch and Display the result
document.getElementById('lovequiz').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let crush = document.getElementById('crush').value;
    let url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${name}&fname=${crush}`;
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '618c1f6eb0msh893d6f2ef05e110p19e3f9jsnb4175e2003ee',
		    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = data.result;
    })
    .catch(error => console.error(error));
}
);

// Use Local Storage to store the result
document.getElementById('lovequiz').addEventListener('submit', function() {
    let name = document.getElementById('name').value;
    let crush = document.getElementById('crush').value;
    let result = document.getElementById('result').innerHTML;

    localStorage.setItem('name', name);
    localStorage.setItem('crush', crush);
    localStorage.setItem('result', result);
});

// Get the result from Local Storage
document.getElementById('name').value = localStorage.getItem('name');
document.getElementById('crush').value = localStorage.getItem('crush');
document.getElementById('result').innerHTML = localStorage.getItem('result');

// Clear Local Storage
document.getElementById('clear').addEventListener('click', function() {
    localStorage.clear();
    document.getElementById('name').value = '';
    document.getElementById('crush').value = '';
    document.getElementById('result').innerHTML = '';
});

// Fetch API
// Code from https://rapidapi.com/ajith/api/love-calculator

// const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '618c1f6eb0msh893d6f2ef05e110p19e3f9jsnb4175e2003ee',
// 		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
// 	}
// };

// fetch(url, options)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));
