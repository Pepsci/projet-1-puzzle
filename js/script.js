function generatePuzzle(x){
    let puzzle = document.querySelector('.puzzle-container');
         puzzle.innerHTML = "";
         
         let random = [];
         while(random.length < x){
             let r = Math.floor(Math.random() * x) +1;
             if(random.indexOf(r) === -1) random.push(r);
            }
            
            for (let i = 0; i < x; i++) {
                let block = document.createElement('div');
                let blockText = document.createTextNode(random[i]-1);
                block.className = `block-${random[i]-1} block`;
                block.appendChild(blockText);
                block.setAttribute("draggable", true)
                block.setAttribute('data-source-id',`block-source-${random[i]-1}`)
                
                divSize(block,x)
                puzzle.appendChild(block);
            }

            let block0 = document.querySelector('.block-0')
            block0.removeAttribute('data-source-id')
            block0.setAttribute('data-target-id','blockTarget')
            block0.setAttribute("draggable", false)

const blockSource = document.querySelectorAll('.block');
const blockTarget = document.querySelectorAll('.block-0');

console.log(blockSource);
console.log(blockTarget);

blockSource.forEach(element => {
    element.addEventListener('dragstart', dragStartHandler);
    element.addEventListener('dragend', dragEnterHandler);
});

function dragStartHandler(e){
    e.dataTransfer.setData('text', e.target.getAttribute('data-source-id'));
    console.log(e.target);
}

blockTarget.forEach(element => {
    element.addEventListener('dragenter', dragEnterHandler);
    element.addEventListener('dragover', dragOverHandler);
    element.addEventListener('dragleave', dragLeaveHandler);
    element.addEventListener('drop', dropHandler);
});

function dragEnterHandler(e) {
    console.log('dragEnterHandler running');
  }
  function dragOverHandler(e) {
    console.log('dragOverHandler running');
    event.preventDefault();
  }
  function dragLeaveHandler(e) {
    console.log('dragLeaveHandler running');
  }

  function dropHandler(e) {
    e.preventDefault();
    
    console.log('dropHandler running');
    
    const dataSourceId = e.dataTransfer.getData('text'); 
    const dataTargetId = e.target.getAttribute('data-target-id');

    console.log(dataSourceId);
    console.log(dataTargetId);

    console.warn(dataSourceId, dataTargetId);
  if(dataSourceId === dataTargetId) {
      console.log(document.querySelector([dataTargetId]));
    //   e.target.insertAdjacentElement('afterbegin', dataSourceId);
    e.target.appendChild(document.getElementById(dataSourceId));
    }
  }
}

function divSize(div,x){
    if(x <= 4){
        div.setAttribute("style","width:var(--size-puzzle-4); height:var(--size-puzzle-4); " );
    }else if (x > 4 && x <= 9) {
        div.setAttribute("style","height:var(--size-puzzle-9); width:var(--size-puzzle-9)" );
    }else if (x > 9){
        div.setAttribute("style"," width:var(--size-puzzle-16); height:var(--size-puzzle-16)" );
    }
}

document.querySelectorAll('.btn-choice').forEach(element => {
    element.addEventListener('click', () => generatePuzzle(element.value))
});