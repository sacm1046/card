const displayNumber = document.getElementById("display__number")
const buttonAdd = document.getElementById("button__pikachu")

const onClick = (displayConst) => {
    let value = Number(displayConst.innerText)
    value++
    displayConst.innerText = value
}

buttonAdd.addEventListener('click', () => onClick(displayNumber))

////////////////////////////////////////////////

const displayNumber2 = document.getElementById("display__number2")
const buttonAdd2 = document.getElementById("button__pikachu2")

buttonAdd2.addEventListener('click', () => onClick(displayNumber2))


