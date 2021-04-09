const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//set up event listener on the button
btn.addEventListener('click', function() {
    //get a random number between 0 - 3 since colors array is 0 - 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
})