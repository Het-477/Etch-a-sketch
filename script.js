const sketchpad = document.querySelector("#sketchpad");

const sliderContainer = document.querySelector("#slider-container");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

let isDrawing = false; // Track if mouse button is pressed

function generateSketchpadPixels(size = 16) {
    sketchpad.innerHTML = ""; // Clears sketchpad
    sketchpad.style.setProperty('--grid-size', size);

    for (let i = 0; i < size * size; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("sketchpad-pixel");
        sketchpad.appendChild(pixel);
    }

    // Add event listeners after generating pixels
    attachSketchpadListeners();
}

function eraseSketchPadPixels() {
    document.querySelectorAll(".sketchpad-pixel").forEach(pixel => {
        pixel.style.backgroundColor = "white";
    });
}

// Function to attach event listeners and also for drawing pixels 
function attachSketchpadListeners() {
    sketchpad.addEventListener("mousedown", (e) => {
        if (e.target.classList.contains("sketchpad-pixel")) {
            isDrawing = true;
            e.target.style.backgroundColor = "black";
        }
    });

    sketchpad.addEventListener("mouseover", (e) => {
        if (isDrawing && e.target.classList.contains("sketchpad-pixel")) {
            e.target.style.backgroundColor = "black";
        }
    });

    document.addEventListener("mouseup", () => {
        isDrawing = false; // Stop drawing when the mouse button is released
    });

    sketchpad.addEventListener("mouseleave", () => {
        isDrawing = false; // Stop drawing when leaving the sketchpad
    });
}

// Slider interactivity
sliderValue.textContent = `${slider.value}px x ${slider.value}px (Resolution)`;
slider.oninput = () => {
    let resolutionText = `${slider.value}px x ${slider.value}px (Resolution)`;
    sliderValue.innerHTML = resolutionText;
    generateSketchpadPixels(slider.value);
};

generateSketchpadPixels();