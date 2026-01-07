const divContainer = document.getElementById("divContainer");

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");

    divContainer.appendChild(newDiv);

    newDiv.addEventListener("mouseenter", () => {
        newDiv.classList.add("hover");
    })
}

