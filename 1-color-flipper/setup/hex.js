const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', randomColor);

function randomColor() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNumber()]
    }
    color.innerText = hexColor;
    document.body.style.backgroundColor = hexColor;
}

randomNumber = () => {
    return Math.floor(Math.random() * hex.length);
}

// function randomNumber() {
//     return Math.floor(Math.random() * hex.length);
// }

