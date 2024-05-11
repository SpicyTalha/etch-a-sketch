function generateRandomRGBNumber() {
    return Math.floor(Math.random() * 256);
}

function generateRandomRGBColor() {
    return `${generateRandomRGBNumber()},${generateRandomRGBNumber()},${generateRandomRGBNumber()}`;
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
            div.style.backgroundColor = "black";
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
const x = createDiv(100);
const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    x.forEach(element => {
        element.style.backgroundColor = "white";
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

const testButton = document.querySelector('#test');
testButton.addEventListener('click', () => console.log(markedDivs));
