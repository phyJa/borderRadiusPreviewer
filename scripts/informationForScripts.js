// Control panel
const controlPanel = document.querySelector(".controlPanel");

// Paragraphs less and more
const controlParagraphs = {
    less: controlPanel.querySelector("#less"),
    more: controlPanel.querySelector("#more")
}

// Axis names
const horizontalAxis = controlPanel.querySelector("#horizontal");

// Corners
const corners = controlPanel.querySelector(".corners");

// Other corners
const otherCorners = corners.querySelector("#otherCorners");

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
