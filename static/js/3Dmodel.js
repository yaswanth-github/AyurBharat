console.log(10);

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r126/three.min.js';
import { GLTFLoader } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r126/loaders/GLTFLoader.js';


/* window.onload = function () {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 2); // Adjust the camera position
    camera.lookAt(0, 0, 0);       // Adjust the camera look-at target

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('model-container').appendChild(renderer.domElement);

    const loader = new GLTFLoader();

    // Add proper lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(directionalLight);

    // Load the .glb model and add it to the scene
    loader.load("{% static 'models/3dModelExpV2.glb' %}", (gltf) => {
        const model = gltf.scene;

        scene.add(model);

         // Start the rendering loop
        console.log("Function Triggered");

        function animate() {
            requestAnimationFrame(animate);

            model.scale.set(0.1, 0.1, 0.1); // Adjust the scale
            model.position.set(0, 0, 0);     // Adjust the position

            // Add any model animations or interactions here
            model.rotation.x += 0.01;
            model.rotation.y += 0.01;

            renderer.render(scene, camera);
        }
        animate();
    });
};
*/

// Create a scene
const scene = new THREE.Scene();

// Create a camera


// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('model-container').appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a cube (replace with your 3D model)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Load your 3D model


// Create lighting (optional)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);

// Add interactivity (optional)
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Animation loop
const animate = () => {
    requestAnimationFrame(animate);

    // Add animations or interactions here
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();





