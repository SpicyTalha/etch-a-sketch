function generateRandomRGBNumber() {
    return Math.floor(Math.random() * 256)
}

function generateRandomRGBColor() {
    return `${generateRandomRGBNumber()},${generateRandomRGBNumber()},${generateRandomRGBNumber()}`
}

function createDiv(number = 1){
    layoutWidth = number*18
    const divList = []
    for (let i = 1; i <= number*number; i++){
        const container = document.querySelector(".container")
        const div = document.createElement("div")
        divList[i] = div
        div.setAttribute('class', 'box')
        container.style.width = `${layoutWidth}px`
        div.addEventListener('mouseover', (event) => {
            div.style.backgroundColor = "black";
            event.stopPropagation()
        })
        container.appendChild(div)
    }
    return divList
}

x = createDiv(30)
const clearButton = document.querySelector("#clear")
clearButton.addEventListener('click', () => {
    x.forEach(element => {
        element.style.backgroundColor = "white"
    });
})
const bordersButton = document.querySelector("#remborders")
bordersButton.addEventListener('click', () => {
    x.forEach(element => {
        element.style.border = "1px solid white"
    });
})