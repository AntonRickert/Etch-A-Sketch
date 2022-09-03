const grid_container = document.querySelector('#grid-container');

grid_container.innerHTML = 'Press "New Grid" button';

const newGrid = document.querySelector('#newGrid');
newGrid.addEventListener('click', makeCanvas);
let div;
let nodesize;
let gridCalc;

function makeCanvas() {
    calcGrid();
    drawGrid();
    mouseOver();
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
}

function drawGrid() {
for (let i = 0; i < gridCalc; i++) {
 
        div = document.createElement('div');
        div.classList.add('grid-node');
        grid_container.appendChild(div);
        div.style.width = '';
        div.style.height = '';
        div.style.width = nodesize;
        div.style.height = nodesize;
    }
}

function mouseOver() {
    const gridNodes = document.querySelectorAll('.grid-node');
    const nodeArr = Array.from(gridNodes);

    for (let i = 0; i < nodeArr.length; i++) {
        nodeArr[i].addEventListener('mouseover', function() {
            nodeArr[i].classList.add('colored');
        });
    }
}








