// 3Dmodel.js

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('model-container').appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();

// Load the .glb model and add it to the scene
loader.load("{% static 'models/your_model.glb' %}", (gltf) => {
    const model = gltf.scene;
    scene.add(model);

    animate(); // Start the rendering loop

    function animate() {
        requestAnimationFrame(animate);

        // Add any model animations or interactions here
        model.rotation.x += 0.01;
        model.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
});
