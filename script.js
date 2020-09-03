//Take the inputs
const inputs = {
    topLeft: document.querySelector("#topLeft"),
    topRight: document.querySelector("#topRight"),
    bottomLeft: document.querySelector("#bottomLeft"),
    bottomRight: document.querySelector("#bottomRight"),
    red: document.querySelector("#red"),
    green: document.querySelector("#green"),
    blue: document.querySelector("#blue"),
    alpha: document.querySelector("#alpha")
};

//Colors
const colors = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1
};

//Take the div
const theDiv = document.querySelector(".theDiv");


// Define the functions
function changeTopLeft(event) {
    theDiv.style.borderTopLeftRadius = `${event.target.value}px`;
}

function changeTopRight(event) {
    theDiv.style.borderTopRightRadius = `${event.target.value}px`;
}

function changeBottomLeft(event) {
    theDiv.style.borderBottomLeftRadius = `${event.target.value}px`;
}

function changeBottomRight(event) {
    theDiv.style.borderBottomRightRadius = `${event.target.value}px`;
}

function changeColor(colors){
    theDiv.style.backgroundColor = `rgba(${colors.red}, ${colors.green}, ${colors.blue}, ${colors.alpha})`;
}

function storeRedValueColor(event){
    colors.red = event.target.value;
    changeColor(colors);
}

function storeGreenValueColor(event){
    colors.green = event.target.value;
    changeColor(colors);
}

function storeBlueValueColor(event){
    colors.blue = event.target.value;
    changeColor(colors);
}

function storeAlphaValue(event){
    colors.alpha = event.target.value;
    changeColor(colors);
}

// Pass the event in the corresponding input
//Border radius
inputs.topLeft.addEventListener("input", changeTopLeft);
inputs.topRight.addEventListener("input", changeTopRight);
inputs.bottomLeft.addEventListener("input", changeBottomLeft);
inputs.bottomRight.addEventListener("input", changeBottomRight);
//Colors
inputs.red.addEventListener("input", storeRedValueColor);
inputs.green.addEventListener("input", storeGreenValueColor);
inputs.blue.addEventListener("input", storeBlueValueColor);
inputs.alpha.addEventListener("input", storeAlphaValue);


function copyToClipboard(){
    // Create a text area element
    const el = document.createElement('textarea');

    // Write in the element the string you want
    el.value = `
    .yourDiv {
        background-color: rgba(${colors.red}, ${colors.green}, ${colors.blue}, ${colors.alpha});
        width: 40%;
        margin: 4vh auto;
        padding: 3vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 20px;
        border-radius: ${theDiv.style.borderTopLeftRadius} ${theDiv.style.borderTopRightRadius} ${theDiv.style.borderBottomLeftRadius} ${theDiv.style.borderBottomRightRadius};
    }`;
    
    // Insert the element in the HTML body
    document.body.appendChild(el);

    // Select the element
    el.select();

    // Copy the element content
    document.execCommand('copy');

    // Remove the element from the HTML body
    document.body.removeChild(el);
}



