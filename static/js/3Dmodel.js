console.log(10);

import * as BABYLON from 'babylonjs';
import { SceneLoader } from 'babylonjs';

const canvas = document.getElementById('model-container');
const engine = new BABYLON.Engine(canvas, true);

// Create a scene
const scene = new BABYLON.Scene(engine);

// Create a camera
const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);

// Create lighting
const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);

// Load your 3D model
SceneLoader.ImportMesh('', '/static/models/3dModelExpV2.glb', '', scene, (meshes) => {
    // Adjust model's scale and position
    const model = meshes[0];
    model.scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    model.position = BABYLON.Vector3.Zero();

    engine.runRenderLoop(() => {
        scene.render();
    });
});

// Resize the canvas when the window is resized
window.addEventListener('resize', () => {
    engine.resize();
});
