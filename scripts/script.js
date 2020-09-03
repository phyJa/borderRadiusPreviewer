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