//Take the inputs
const inputs = {
    topLeft: document.querySelector("#topLeft"),
    topRight: document.querySelector("#topRight"),
    bottomLeft: document.querySelector("#bottomLeft"),
    bottomRight: document.querySelector("#bottomRight")
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

// Pass the event in the corresponding input
inputs.topLeft.addEventListener("input", changeTopLeft);
inputs.topRight.addEventListener("input", changeTopRight);
inputs.bottomLeft.addEventListener("input", changeBottomLeft);
inputs.bottomRight.addEventListener("input", changeBottomRight);

function copyToClipboard(){
    // Create a text area element
    const el = document.createElement('textarea');

    // Write in the element the string you want
    el.value = `.yourDiv {
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



