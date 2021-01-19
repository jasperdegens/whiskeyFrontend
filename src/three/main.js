import * as THREE from 'three';

import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';

import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';

import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2.js';

// global variables needed
let camera, scene, renderer, controls;


init();
animate();

function loadBarrel(scene) {
    const loadMeshPomises = [];
 
    loadMeshPomises.push(new Promise((resolve, reject) => {
        const loader = new OBJLoader2();
        loader.load('/meshes/barellRings.obj', resolve);
    }));

    
    loadMeshPomises.push(new Promise((resolve, reject) => {
        const loader = new OBJLoader2();
        loader.load('/meshes/barellRounds.obj', resolve);
    }));
    loadMeshPomises.push(new Promise((resolve, reject) => {
        const loader = new OBJLoader2();
        loader.load('/meshes/barellPlanks.obj', resolve);
    }));
    
    // add barrels to scene only after all pieces are finished loading
    Promise.all(loadMeshPomises).then((meshes) => {
        const rings = meshes[0];
        const steelMat = new THREE.MeshPhongMaterial({ 
            color: 0x333333,
            shininess: 70,
            specular: 0x333333
        });
        for (const child of rings.children) {
            child.material = steelMat;
        }
        rings.scale.set(20, 20, 20);
        scene.add(rings);
        console.log(rings);
        
        const woodTexture = new THREE.TextureLoader().load('/textures/wood.jpg');
        woodTexture.wrapS = THREE.RepeatWrapping;
        woodTexture.wrapT = THREE.RepeatWrapping;
        const woodMat = new THREE.MeshPhongMaterial({ map: woodTexture });
        
        const rounds = meshes[1];
        for (const child of rounds.children) {
            child.material = woodMat;
        }
        rounds.scale.set(20, 20, 20);
        scene.add(rounds);
        
        const planks = meshes[2];
        for (const child of planks.children) {
            child.material = woodMat;
        }
        planks.scale.set(20, 20, 20);
        scene.add(planks);
    });
}

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 200 );
    camera.position.set( 0, 10, 25 );
    camera.lookAt( scene.position );

    // add lights to camera
    const dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
    camera.add( dirLight );
    scene.add( camera );

    // load barrel
    loadBarrel(scene);

    const canvas = document.querySelector('#barrel');
    renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    // add camera controls
    controls = new TrackballControls( camera, canvas );
    controls.rotateSpeed = 8.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    controls.keys = [ 65, 83, 68 ];

    window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );
    controls.update();

    renderer.render( scene, camera );

}