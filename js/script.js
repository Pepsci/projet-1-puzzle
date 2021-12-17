function generatePuzzle(x) {
  let puzzle = document.querySelector(".puzzle-container");
  puzzle.innerHTML = "";

  // Création du bloc 0
  let block0 = document.createElement("div");
  let span0 = document.createElement('span')
  block0.className = `blockCible`;
  block0.setAttribute("id", "block-0");
  block0.setAttribute("draggable", true);
  block0.setAttribute("data-target-id", "target");

  let blockText0 = document.createTextNode("0");
  divSize(block0, x);
  span0.appendChild(blockText0);
  block0.appendChild(span0)
  puzzle.appendChild(block0);

  // ramdomisation des block
  let random = [];
  while (random.length < x) {
    let r = Math.floor(Math.random() * x);
    if (random.indexOf(r) === -1) random.push(r);
  }

  for (let i = 0; i < x; i++) {
    let block = document.createElement("div");
    let blockText = document.createTextNode(random[i] + 1);
    let span = document.createElement('span');
    block.className = `block`;
    block.setAttribute("id", "targetBlock");
    block.setAttribute("data-source-id", `source-${random[i] + 1}`);
    span.appendChild(blockText);
    block.appendChild(span)
    block.setAttribute("draggable", true);
    divSize(block, x);
    puzzle.appendChild(block);
  }

  const blockSource = document.querySelectorAll(".block");
  const blockTarget = document.querySelectorAll(".blockCible");

  blockSource.forEach((el) => {
    el.addEventListener("dragstart", dragStartHandler);
    el.addEventListener("dragend", dragEndHandler);
  });

  let clicDiv;
  function dragStartHandler(e) {
    e.dataTransfer.setData("text", e.target.getAttribute("data-source-id"));
    clicDiv = e.target;
  }

  blockTarget.forEach((el) => {
    el.addEventListener("dragenter", dragEnterHandler);
    el.addEventListener("dragover", dragOverHandler);
    el.addEventListener("dragleave", dragLeaveHandler);
    el.addEventListener("drop", dropHandler);
  });

  function dragEnterHandler(e) {}

  function dragEndHandler(e) {}

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dragLeaveHandler(e) {}

  function dropHandler(e) {
    e.preventDefault();

    dragLeaveHandler(e);

    const dataSourceId = e.dataTransfer.getData("text");
    const source = e.target;

    const sourceId = e.target.id;
    const dataTargetId = e.target.getAttribute("data-target-id");

    const parentA = source.parentNode;

    const siblingA =
      source.nextSibling === clicDiv ? source : source.nextSibling;
    clicDiv.parentNode.insertBefore(source, clicDiv);
    parentA.insertBefore(clicDiv, siblingA);
    soluce(x);
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
  } else if (x > 9 && x <= 15) {
    div.setAttribute(
      "style",
      " width:var(--size-puzzle-16); height:var(--size-puzzle-16)"
    );
  } else if (x > 15) {
    div.setAttribute(
      "style",
      "width:var(--size-puzzle-25); height:var(--size-puzzle-25)"
    );
  }
}

document.querySelectorAll(".btn-choice").forEach((element) => {
  element.addEventListener("click", () => generatePuzzle(element.value));
});

function soluce(x) {
  
  let lvl1 = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let lvl2 = ["1,", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
  let lvl3 = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21",
    "22", "23", "24",
  ];

  let gameInProgress = [];
  let y = 0;
  let grill = document.querySelectorAll(".block span");
  for (let i = 0; i < grill.length; i++) {
    y = grill[i].innerHTML;
    gameInProgress.push(y);
    console.log(lvl1);
    console.log(gameInProgress);
  }
let finishMsg = document.getElementById('finish')
  console.log(finishMsg);

  if (JSON.stringify(lvl1) === JSON.stringify(gameInProgress)) {
    finishMsg.style.visibility = 'visible';
    console.log("fini");
  } else if (JSON.stringify(lvl2) === JSON.stringify(gameInProgress)) {
    finishMsg.style.visibility = 'visible';
  } else if (JSON.stringify(lvl3) === JSON.stringify(gameInProgress)) {
    finishMsg.style.visibility = 'visible';
  }


}
