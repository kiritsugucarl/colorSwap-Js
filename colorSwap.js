//array of possible combinations for hex code 6 digits
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

var clockBody = document.getElementById('clock')

var secHand = document.getElementById('secHand')

const btn = document.getElementById('change-color-btn')

btn.addEventListener('click', function() {

    let bgColor = '#';
    for (let i = 0; i < 6; i++) {
        bgColor += hex[getRandomNumber()]
    }

    document.body.style.backgroundColor = bgColor;

    let clockColor = '#';
    for (let x = 0; x < 6; x++) {
        clockColor += hex[getRandomNumber()]
    }

    clockBody.style.backgroundColor = clockColor;

    let secondHandColor = '#';
    for (let y = 0; y < 6; y++) {
        secondHandColor += hex[getRandomNumber()]
    }

    secHand.style.backgroundColor = secondHandColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}