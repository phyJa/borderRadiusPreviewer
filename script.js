
function changeBorderRadius() {
    // Store the inputs here
    const inputs = {
        topLeft: document.querySelector("#topLeft"),
        topRight: document.querySelector("#topRight"),
        bottomLeft: document.querySelector("#bottomLeft"),
        bottomRight: document.querySelector("#bottomRight")
    }

    // Top left input
    // Save theDiv
    const theDiv = document.querySelector(".theDiv");

    // Change the style
    theDiv.style.borderTopLeftRadius = `${inputs.topLeft.value}` + "px";
    theDiv.style.borderTopRightRadius = `${inputs.topRight.value}` + "px";
    theDiv.style.borderBottomLeftRadius = `${inputs.bottomLeft.value}` + "px";
    theDiv.style.borderBottomRightRadius = `${inputs.bottomRight.value}` + "px";
}