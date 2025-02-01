const sketchpad = document.querySelector("#sketchpad");

const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `Resolution: (${slider.value} x ${slider.value})`;

function generateSketchpadPixels(size = 16) { // default sketchpad size
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

function eraseSketchPad() {
    document.querySelectorAll(".sketchpad-pixel").forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });
}

generateSketchpadPixels()