// Image Shuffler API


// Music Player
function sound(){
    var snd = new Audio("assets/songs/BLACK OPS 2 - OFFICIAL MULTIPLAYER MENU THEME SONG (HD).mp3")//wav is also supported
    snd.play()//plays the sound
}

// Love Quiz API
fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice", {
"method": "GET",
"headers": {
"x-rapidapi-key": "input-your-custom-key-value-here",
"x-rapidapi-host": "love-calculator.p.rapidapi.com"
}
})
.then(response => {
console.log(response);
})
.catch(err => {
console.error(err);
});