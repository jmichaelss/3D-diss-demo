import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js";
import { OBJLoader } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/MTLLoader.js";

// Declare variables for the scene, camera, and renderer
var scene, camera, renderer;

// Initialize the scene
init();

// Start the animation loop
animate();

function init() {
  // Create a new Three.js scene
  scene = new THREE.Scene();

  // Set the background color of the scene
  scene.background = new THREE.Color(0x40e0d0);

  // Create a new perspective camera
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    3,
    100
  );

  // Set the position of the camera
  camera.position.z = 50;

  // Create a new WebGL renderer
  renderer = new THREE.WebGLRenderer();

  // Set the size of the renderer
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add the renderer to the HTML document
  document.getElementById("container").appendChild(renderer.domElement);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

  scene.add(directionalLight);

  const light = new THREE.AmbientLight(0x404040); // soft white light
  scene.add(light);

  const objLoader = new OBJLoader();

  // Load the OBJ file
  objLoader.load("kraken.obj", function (object) {
    //   add it to the scene
    scene.add(object);
  });

  // Add OrbitControls to the scene
  var controls = new OrbitControls(camera, renderer.domElement);
}

function animate() {
  // Request the next frame of the animation
  requestAnimationFrame(animate);

  // Render the scene
  renderer.render(scene, camera);
}
