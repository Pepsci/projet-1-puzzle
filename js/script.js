function generatePuzzle(x) {
  let puzzle = document.querySelector(".puzzle-container");
  puzzle.innerHTML = "";
  let block0 = document.createElement("div");
  block0.className = `blockCible`;
  block0.setAttribute('id', 'block-0')
  block0.setAttribute("draggable", true);
  block0.setAttribute("data-target-id", "target");

  let blockText0 = document.createTextNode("0");

  divSize(block0, x);
  block0.appendChild(blockText0);
  puzzle.appendChild(block0);

  let random = [];
  while (random.length < x) {
    let r = Math.floor(Math.random() * x);
    if (random.indexOf(r) === -1) random.push(r);
  }
  for (let i = 0; i < x; i++) {
    let block = document.createElement("div");
    let blockText = document.createTextNode(random[i] + 1);
    block.className = `block`;
    // block.setAttribute("id", `block-${random[i] + 1}`);
    block.setAttribute("id", "targetBlock");
    block.setAttribute("data-source-id", `source-${random[i] + 1}`);
    block.appendChild(blockText);
    block.setAttribute("draggable", true);
    divSize(block, x);
    puzzle.appendChild(block);
  }

  const blockSource = document.querySelectorAll(".block");
  const blockTarget = document.querySelectorAll(".blockCible");  

  console.log(blockSource);
  console.log(blockTarget);

blockSource.forEach((el) => {
  el.addEventListener("dragstart", dragStartHandler);
  el.addEventListener("dragend", dragEndHandler);
});

function dragStartHandler(e) {
  console.log("--------dragStartHandler running");
  e.dataTransfer.setData("text", e.target.getAttribute("data-source-id"));
  console.log(e.target);
}


blockTarget.forEach((el) => {
  el.addEventListener("dragenter", dragEnterHandler);
  el.addEventListener("dragover", dragOverHandler);
  el.addEventListener("dragleave", dragLeaveHandler);
  el.addEventListener("drop", dropHandler);
});

function dragEnterHandler(e) {
  console.log("--------dragEnterHandler running");
}

function dragEndHandler(e) {
}

function dragOverHandler(e) {
  console.log("--------dragOverHandler running");
  e.preventDefault();
}

function dragLeaveHandler(e) {
  console.log("--------dragLeaveHandler running");
}

function dropHandler(e) {
  e.preventDefault();

  console.log("--------dropHandler running--------");
  dragLeaveHandler(e); 
  
  const dataSourceId = e.dataTransfer.getData('text'); 
  const dataTargetId = e.target.getAttribute('data-target-id');
  
console.log(dataSourceId);
console.log(dataTargetId);
console.log(dataSourceId, dataTargetId);


    

  console.log("-------- dropHandler End--------");


}
}


function divSize(div, x) {
  if (x <= 4) {
    div.setAttribute(
      "style",
      "width:var(--size-puzzle-4); height:var(--size-puzzle-4); "
    );
  } else if (x > 4 && x <= 9) {
    div.setAttribute(
      "style",
      "height:var(--size-puzzle-9); width:var(--size-puzzle-9)"
    );
  } else if (x > 9) {
    div.setAttribute(
      "style",
      " width:var(--size-puzzle-16); height:var(--size-puzzle-16)"
    );
  }
}

document.querySelectorAll(".btn-choice").forEach((element) => {
  element.addEventListener("click", () => generatePuzzle(element.value));
});
