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

function changeColor(redValue, greenValue, blueValue, alphaValue){
    theDiv.style.backgroundColor = `rgba(${redValue}, ${greenValue}, ${blueValue}, ${alphaValue})`;
}

function storeRedValueColor(event){
    console.log(event.target.value);
}

function storeGreenValueColor(event){
    console.log(event.target.value);
}

function storeBlueValueColor(event){
    console.log(event.target.value);
}

function storeAlphaValue(event){
    console.log(event.target.value);
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
        background-color: red;
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



