// Define the functions
function changeBorders(borderObject) {
    if(!borderObject.allValues) {
        // Standard
        theDiv.style.borderRadius = `
            ${borderObject.topLeft}px
            ${borderObject.topRight}px
            ${borderObject.bottomRight}px
            ${borderObject.bottomLeft}px
        `;
    }
    else {
        theDiv.style.borderRadius = `
            ${borderObject.topLeft}px 
            ${borderObject.topRight}px 
            ${borderObject.bottomRight}px
            ${borderObject.bottomLeft}px 
            / 
            ${borderObject.topLeftB}px 
            ${borderObject.topRightB}px 
            ${borderObject.bottomRightB}px
            ${borderObject.bottomLeftB}px 
        `;
    }
}

function changeStandardValueToZero(objectProperty) {
    if(objectProperty === "")
        objectProperty = 0;

    return objectProperty;
}

function changeTopLeft(event) {
    borders.topLeft = changeStandardValueToZero(event.target.value);
    changeBorders(borders);
}

function changeTopRight(event) {
    borders.topRight = changeStandardValueToZero(event.target.value);
    changeBorders(borders);
}

function changeBottomLeft(event) {
    borders.bottomLeft = changeStandardValueToZero(event.target.value);
    changeBorders(borders);
}

function changeBottomRight(event) {
    borders.bottomRight = changeStandardValueToZero(event.target.value);
    changeBorders(borders);
}

function changeTopLeftB(event) {
    borders.topLeftB = changeStandardValueToZero(event.target.value);
    changeBorders(borders);
}

function changeTopRightB(event) {
    borders.topRightB = changeStandardValueToZero(event.target.value);
    changeBorders(borders);
}

function changeBottomLeftB(event) {
    borders.bottomLeftB = changeStandardValueToZero(event.target.value);
    changeBorders(borders);
}

function changeBottomRightB(event) {
    borders.bottomRightB = changeStandardValueToZero(event.target.value);
    changeBorders(borders);
}

function changeColor(colors){
    theDiv.style.backgroundColor = `rgba(${colors.red}, ${colors.green}, ${colors.blue}, ${colors.alpha})`;
}

function storeRedValueColor(event){
    colors.red = changeStandardValueToZero(event.target.value);
    changeColor(colors);
}

function storeGreenValueColor(event){
    colors.green = changeStandardValueToZero(event.target.value);
    changeColor(colors);
}

function storeBlueValueColor(event){
    colors.blue = changeStandardValueToZero(event.target.value);
    changeColor(colors);
}

function storeAlphaValue(event){
    colors.alpha = changeStandardValueToZero(event.target.value);
    changeColor(colors);
}

function copyToClipboard(){
    // Create a text area element
    const el = document.createElement('textarea');

    // Write in the element the string you want
    el.value = 
        `
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
                border-radius:  
                    ${theDiv.style.borderRadius} ;
            }
        `;
    
    // Insert the element in the HTML body
    document.body.appendChild(el);

    // Select the element
    el.select();

    // Copy the element content
    document.execCommand('copy');

    // Remove the element from the HTML body
    document.body.removeChild(el);
}

function displayMoreCorners(){
    // Expand the width of the control panel 
    controlPanel.style.width = "95%";

    // Remove the notDisplay class from #otherCorners, #less and horizontalAxis(#horizontal)
    otherCorners.classList.remove("notDisplay"); 
    controlParagraphs.less.classList.remove("notDisplay");
    horizontalAxis.classList.remove("notDisplay");

    // Add the not display class to #more
    controlParagraphs.more.classList.add("notDisplay");

    // Change the style of the corners
    corners.style.width = "95%";
    corners.style.display = "grid";
    corners.style.gridTemplateColumns = "1fr 1fr";

    // Change the property "allValues" of borders to true:
    borders.allValues = true;
}

function displayLessCorners(){
    // Expand the width of the control panel 
    controlPanel.style.width = "80%";

    // Remove the notDisplay class from #otherCorners
    otherCorners.classList.remove("notDisplay"); 

    // Add the notDisplay class from #otherCorners, #less and horizontalAxis
    otherCorners.classList.add("notDisplay"); 
    controlParagraphs.less.classList.add("notDisplay");
    horizontalAxis.classList.add("notDisplay");

    // Remove the not display class to #more
    controlParagraphs.more.classList.remove("notDisplay");

    // Change the style of the corners
    corners.style.width = "60%";
    corners.style.display = "block";

    // Change the property "allValues" of borders to false:
    borders.allValues = false;
}