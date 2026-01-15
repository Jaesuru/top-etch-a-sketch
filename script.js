const divContainer = document.getElementById("divContainer");
let alertBtn = document.getElementById("alertBtn");

let gridSize = 16;

// new revamped code

function createGrid (size) {
    divContainer.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        let newDiv = document.createElement("div");
        newDiv.style.flex = `0 0 calc(960px / ${size + 1})`;
        newDiv.style.height = `calc(960px / ${size + 1})`;
        newDiv.style.backgroundColor = `white`;

        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.backgroundColor = "rgb(82, 82, 82)";
        });

        divContainer.appendChild(newDiv);
    }
}

createGrid(gridSize);

alertBtn.addEventListener("click", () => {
    let newGridSize = parseInt(window.prompt("Please select a new grid size (max is 100): "));

    if (isNaN(newGridSize) || (newGridSize < 1)) {;
        alert("Please enter a valid number greater than 0.");
        return;
    }

    if (newGridSize > 100) {
        window.alert("Maximum grid size is 100.");
        newGridSize = 100;
    }

    gridSize = newGridSize;
    createGrid(gridSize);
});