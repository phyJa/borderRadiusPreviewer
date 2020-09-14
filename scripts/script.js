// Pass the event in the corresponding input
// Border radius
// Horizontal axis (standard)
inputs.topLeft.addEventListener("input", changeTopLeft);
inputs.topRight.addEventListener("input", changeTopRight);
inputs.bottomLeft.addEventListener("input", changeBottomLeft);
inputs.bottomRight.addEventListener("input", changeBottomRight);

// Vertical axis
inputs.topLeftB.addEventListener("input", changeTopLeftB);
inputs.topRightB.addEventListener("input", changeTopRightB);
inputs.bottomLeftB.addEventListener("input", changeBottomLeftB);
inputs.bottomRightB.addEventListener("input", changeBottomRightB);

//Colors
inputs.red.addEventListener("input", storeRedValueColor);
inputs.green.addEventListener("input", storeGreenValueColor);
inputs.blue.addEventListener("input", storeBlueValueColor);
inputs.alpha.addEventListener("input", storeAlphaValue);