input = prompt("Enter a Value Between 1 - 100")

function generateRandomRGBNumber() {
    return Math.floor(Math.random() * 256);
}

function generateRandomRGBColor() {
    return `rgb(${generateRandomRGBNumber()},${generateRandomRGBNumber()},${generateRandomRGBNumber()})`;
}

function createDiv(number = 1) {
    layoutWidth = number * 7;
    const divList = [];
    for (let i = 1; i <= number * number; i++) {
        const container = document.querySelector(".container");
        const div = document.createElement("div");
        divList[i] = div;
        div.setAttribute('class', 'box');
        container.style.width = `${layoutWidth}px`;
        div.addEventListener('mouseover', (event) => {  
            div.style.backgroundColor = generateRandomRGBColor();
            div.setAttribute('class', 'box marked');
            if (bordersButton.textContent == "Grid Lines"){
                div.style.border = "1px solid black"
            }
            markedDivs.push(div);
            event.stopPropagation();
        });
        container.appendChild(div);
    }
    return divList;
}

let markedDivs = [];
const x = createDiv(input);


const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    x.forEach(element => {
        element.style.backgroundColor = "white";
        if (bordersButton.textContent == 'Grid Lines')
            element.style.border = '1px solid white'
        else
            element.style.border = '1px solid black'
    });
    markedDivs = [];
});

// Getting the Border Button
const bordersButton = document.querySelector("#remborders");

// Adding Event Listener to switch between No Borders and Gridlines
bordersButton.addEventListener('click', () => {
    // Changing the borders to white
    if (bordersButton.textContent == "Remove Borders") {
        x.forEach((element, index) => {
            if (!markedDivs.includes(x[index])) {
                element.style.border = "1px solid white";
            }
        });
        bordersButton.textContent = "Grid Lines";
    } else { // Changing the borders back to black
        x.forEach(element => {
            element.style.border = "1px solid black";
        });
        bordersButton.textContent = "Remove Borders";
    }
});