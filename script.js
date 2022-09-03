const grid_container = document.querySelector('#grid-container');

let div;
let gridSize;
let gridCalc;
let nodesize;

gridCalculation();

for (let i = 0; i < gridCalc; i++) {
    div = document.createElement('div');
    div.classList.add('grid-node');
    grid_container.appendChild(div);
    div.style.width = nodeSize;
    div.style.height = nodeSize;
}

const gridNodes = document.querySelectorAll('.grid-node');
const nodeArr = Array.from(gridNodes);

for (let i = 0; i < nodeArr.length; i++) {
    nodeArr[i].addEventListener('mouseover', function() {
        nodeArr[i].classList.add('colored');
    });
}
function gridCalculation() {
    gridSize = prompt('Enter grid size');
    gridCalc = gridSize * gridSize;
    nodeSize = 100 / gridSize + '%';
}


