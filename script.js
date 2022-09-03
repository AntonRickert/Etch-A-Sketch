const grid_container = document.querySelector('#grid-container');

const startText = document.createElement('div');
startText.textContent = 'Click "New Grid" button.';
startText.classList.add('startText');
grid_container.appendChild(startText);

const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', makeCanvas);
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearCanvas);

let div;
let nodesize;
let gridCalc;
let borderRadius;
let gridNodes;
let nodeArr;



function clearCanvas() {
    for (let i = 0; i < nodeArr.length; i++) {
        nodeArr[i].classList.remove('colored');
    };
}


function makeCanvas() {
    calcGrid();
    drawGrid();
    drawPixel();
}

function calcGrid() {
    grid_container.innerHTML = '';
    let gridSize = prompt('Enter grid size from 1 - 100');
        
    if (gridSize > 100 || gridSize < 1) {
        alert('Please enter a valid grid size.')
        calcGrid();
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

function drawPixel() {
    gridNodes = document.querySelectorAll('.grid-node');
    nodeArr = Array.from(gridNodes);

    for (let i = 0; i < nodeArr.length; i++) {
        nodeArr[i].addEventListener('mouseover', function() {
            nodeArr[i].classList.add('colored');
        });
    }
}








