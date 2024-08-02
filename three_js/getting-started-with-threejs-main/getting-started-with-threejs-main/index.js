import * as THREE from "three";

const width = window.innerWidth;
const height = window.innerHeight;

const rendere = new THREE.WebGLRenderer({ antialias: true });
rendere.setSize(width, height);
document.body.appendChild(rendere.domElement);

const fov = 75;
const aspect = width / height;
const near = 0.1;
const far = 10;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  wireframe: true,
});

const wiremest = new THREE.Mesh(geo, mat);
scene.add(wiremest);

const light = new THREE.HemisphereLight(0xffffff);
scene.add(light);

function ramin(t = 0) {
  requestAnimationFrame(ramin);
  rendere.render(scene, camera);
}
ramin();
