function generatePuzzle(x) {
  let puzzle = document.querySelector(".puzzle-container");
  puzzle.innerHTML = "";
  let block0 = document.createElement("div");
  block0.className = `block block-0`;
  block0.setAttribute("draggable", true);

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
    block.appendChild(blockText);
    block.setAttribute("draggable", true);
    divSize(block, x);
    puzzle.appendChild(block);
  }

  let dragSrcEl = null;
  function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.inneHTML);
    if (dragSrcEl.innerHTML != "0") {
      dragSrcEl.setAttribute("draggable", "true");
    }
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
    if (dragSrcEl.innerHTML != dragSrcEl.innerHTM) {
      dragSrcEl.removeAttribute("draggable");
    }
    console.log(e);
    return false;
  }

  function handleDragEnter(e) {
    if (dragSrcEl.innerHTML != dragSrcEl.innerHTM) {
      dragSrcEl.removeAttribute("draggable");
    }
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
    this.className = "block";
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    if (dragSrcEl != this) {
      let temp = this.innerHTML;
      this.innerHTML = dragSrcEl.innerHTML;
      dragSrcEl.innerHTML = temp;

      if (dragSrcEl.innerHTML === "0") {
        dragSrcEl.className = "block-0";
      } else if (dragSrcEl.innerHTML != "0") {
        dragSrcEl.className = "block";
      }
    }
    return false;
  }

  function handleDragEnd(e) {
    [].forEach.call(blocks, function (block) {
      block.classList.remove("over");
      if (block.innerHTML != "0") block.className = "block";
    });
  }

  let blocks = document.querySelectorAll(".block");
  console.log(blocks);
  [].forEach.call(blocks, function (block) {
    block.addEventListener("dragstart", handleDragStart, false);
    block.addEventListener("dragenter", handleDragEnter, false);
    block.addEventListener("dragover", handleDragOver, false);
    block.addEventListener("dragleave", handleDragLeave, false);
    block.addEventListener("drop", handleDrop, false);
    block.addEventListener("dragend", handleDragEnd, false);
  });
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
