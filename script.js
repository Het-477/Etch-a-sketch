const sketchpad = document.querySelector("#sketchpad");

const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");


function generateSketchpadPixels(size = 16) { // default sketchpad size
    sketchpad.innerHTML = ""; // resets (clears) the pad when its resized
    sketchpad.style.setProperty('--grid-size', size);

    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("sketchpad-pixel");
        drawPixels(pixel);
        sketchpad.appendChild(pixel);
    }
}

function eraseSketchPadPixels() {
    document.querySelectorAll(".sketchpad-pixel").forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });
}

// fills the pixels 
function drawPixels(pixel) {
    pixel.addEventListener("mouseover", () => {
        // if (pixel.addEventListener("click") == true) {
            pixel.style.backgroundColor = "black";
        // }
    });
}

// for slider interactivity 
sliderValue.textContent = `${slider.value}px x ${slider.value}px (Resolution)`;
slider.oninput = () => {
    let resolutionText = `${slider.value}px x ${slider.value}px (Resolution)`;
    sliderValue.innerHTML = resolutionText;
    generateSketchpadPixels(slider.value); // No need to call eraseSketchPadPixels()
};

// slider.addEventListener("click", () => {
//     let resolutionText = `${this.value} x ${this.value}px (Resolution)`;
//     sliderValue.innerHTML = resolutionText;
//     eraseSketchPadPixels()
//     generateSketchpadPixels(this.value)
// })

generateSketchpadPixels();