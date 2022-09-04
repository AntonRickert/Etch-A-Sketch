const grid_container = document.querySelector('#grid-container');
const valueContainer = document.querySelector('#value');
const startText = document.createElement('div');

startText.textContent = 'Click "New Grid" or "Random RGB" button.';
startText.classList.add('startText');
grid_container.appendChild(startText);

const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', makeCanvasBlue);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearCanvas);

const slider = document.querySelector('input[type="range"]');
const value = document.querySelector('#valueOutput');
slider.addEventListener('input', updateValue);

const randomRGB = document.querySelector('#random');
randomRGB.addEventListener('click', makeCanvasRandom);


let div;
let nodesize;
let gridCalc;
let borderRadius;
let gridNodes;
let nodeArr;

function random_rgba() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

function updateValue(){
    value.textContent = slider.value + ' x ' + slider.value;
}

function clearCanvas() {
    for (let i = 0; i < nodeArr.length; i++) {
        nodeArr[i].classList.remove('colored');
        nodeArr[i].style.backgroundColor = '';
    };
}


function makeCanvasBlue() {
    calcGrid();
    drawGrid();
    drawPixelBlue();
}

function makeCanvasRandom() {
    calcGrid();
    drawGrid();
    drawPixelRandom();
}

function calcGrid() {
    grid_container.innerHTML = '';
    let gridSize = slider.value;
        
    if (gridSize > 100 || gridSize < 1) {
        alert('Please enter a valid grid size.')
        return;
    }
    gridCalc = gridSize * gridSize;
    nodesize = 100 / gridSize + '%';
    nodeSizeStyle = 100 / gridSize;
    borderRadius = nodeSizeStyle * (100 / 90) + 'px';
}

function drawGrid() {
for (let i = 0; i < gridCalc; i++) {
        
        div = document.createElement('div');
        div.classList.add('grid-node');
        grid_container.appendChild(div);
        div.style.width = nodesize;
        div.style.height = nodesize;
        div.style.borderRadius = borderRadius;
    }
}

function drawPixelBlue() {
    gridNodes = document.querySelectorAll('.grid-node');
    nodeArr = Array.from(gridNodes);

    for (let i = 0; i < nodeArr.length; i++) {
        nodeArr[i].addEventListener('mouseover', function() {
            nodeArr[i].classList.add('colored');
        });
    }
}

function drawPixelRandom() {
    gridNodes = document.querySelectorAll('.grid-node');
    nodeArr = Array.from(gridNodes);

    for (let i = 0; i < nodeArr.length; i++) {
        nodeArr[i].addEventListener('mouseover', function() {
            nodeArr[i].style.backgroundColor = random_rgba();
        });
    }
}








