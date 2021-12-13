const btn1 = document.getElementById('2').value;


let x = btn1;

function generateMatrix(x){
    let puzzle = document.querySelector('.puzzle-container');
    let puzzleChild = puzzle.childNodes;
    x = btn1;
    
    for (let i = 0; i < x; i++) {
        let block = document.createElement('div');
        let blockText = document.createTextNode(i + 0);
        block.className = 'block'
        block.appendChild(blockText)
        puzzle.appendChild(block)
        puzzleChild.className = 'block-0'    
    }
}


document.getElementById('2').addEventListener("click", generateMatrix)