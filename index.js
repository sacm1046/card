const buttonPikachu = document.getElementById("button__pikachu")
console.log(buttonPikachu)

const displayNumber = document.getElementById("display__number")
let display = 0

const onClick = () => {
    display = display + 1
    displayNumber.innerText = display
}

