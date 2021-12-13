function generatePuzzle(x){
    let puzzle = document.querySelector('.puzzle-container');
         puzzle.innerHTML = "";
    let block0 = document.createElement('div');
        block0.className = 'block-0 block'
        let puzzleChild = puzzle.childNodes;
        puzzle.appendChild(block0);
        divSize(block0, x)
        

    let random = [];
while(random.length < x){
    let r = Math.floor(Math.random() * x) + 1;
    if(random.indexOf(r) === -1) random.push(r);
}
    
    for (let i = 0; i < x; i++) {
        let block = document.createElement('div');
        let blockText = document.createTextNode(random[i]);
        block.className = `block-${i + 1} block`;
        block.appendChild(blockText);
        puzzle.appendChild(block);
        divSize(block,x)
 
    }
}

function divSize(div,x){
    if(x <= 3){
        div.setAttribute("style","width:var(--size-puzzle-4); height:var(--size-puzzle-4)" );
    }else if (x > 3 && x <= 9) {
        div.setAttribute("style","height:var(--size-puzzle-9); width:var(--size-puzzle-9)" );
    }else if (x > 9){
        div.setAttribute("style"," width:var(--size-puzzle-16); height:var(--size-puzzle-16)" );
    }
}

document.querySelectorAll('.btn-choice').forEach(element => {
    element.addEventListener('click', () => generatePuzzle(element.value))

});
