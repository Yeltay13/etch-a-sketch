const container = document.querySelector(".grid-container");
const button = document.querySelector(".btn-amount");

button.addEventListener("click", () => {
  const squaresPerSide = prompt(
    `Enter the number of squares per side(maximum: 100)`,
    16
  );
  if (squaresPerSide !== null) {
    const numSquares = parseInt(squaresPerSide);
    if (!isNaN(numSquares) && numSquares > 0 && numSquares <= 100) {
      createGrid(numSquares);
    } else {
      alert("Please enter a number between 1 and 100");
    }
  }
});

function createGrid(squaresPerSide) {
  container.innerHTML = "";
  const totalSize = 640;
  const squareSize = totalSize / squaresPerSide;

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const div = document.createElement("div");
    div.className = "grid-item";
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    container.appendChild(div);
  }
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", handleMouseEnter);
    item.addEventListener("mouseleave", handleMouseLeave);
  });
}

function handleMouseEnter(event) {
  event.target.classList.add("hovered");
}
function handleMouseLeave(event) {
  event.target.classList.remove("hovered");
}
createGrid(16);
