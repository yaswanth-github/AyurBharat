// JavaScript functions to rotate the model
function rotateFront() {
    const model = document.querySelector("#model");
    model.setAttribute("rotation", { x: 0, y: 90, z: 0 });
}

function rotateBack() {
    const model = document.querySelector("#model");
    model.setAttribute("rotation", { x: 0, y: -90, z: 0 });
}
