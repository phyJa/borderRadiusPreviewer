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