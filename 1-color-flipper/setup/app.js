const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//set up event listener on the button
btn.addEventListener('click', function() {
    //get a random number between 0 - 3 since colors array is 0 - 3
    const randomNumber = randomNumberGenerator();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function randomNumberGenerator() {
    return Math.floor(Math.random() * colors.length) + 1;
}