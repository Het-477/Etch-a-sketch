// const PAD_SIDE = 600;

function generateSketchpadPixels(size = 16) { // default sketchpad size
    const sketchpad = document.getElementById("sketchpad");
    sketchpad.innerHTML = ""; // resets (clears) the pad when its resized
    sketchpad.style.setProperty('--grid-size', size);
    // sketchpad.style.setProperty('--pad-side', PAD_SIDE);

    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("sketchpad-pixel");
        pixel.addEventListener("mouseover", () => {
            pixel.style.backgroundColor = "black";
        });
        sketchpad.appendChild(pixel);
    }
}

generateSketchpadPixels()