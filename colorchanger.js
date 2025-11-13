const body = document.body;  
const defaultColor = window.getComputedStyle(body).backgroundColor;

function changeColor(color) {
  body.style.background = color;
  console.log("Background color changed to:", color);
}

function resetColor() {
  body.style.background = defaultColor;
  console.log("Background color reset to default");
}


document.querySelectorAll(".colorlist").forEach(btn => {
  btn.addEventListener("click", () => {
    const color = btn.dataset.color;
    console.log(color);
    if (color) {
      changeColor(color);
    }
  });
});

document.getElementById("defaultcolor").addEventListener("click", resetColor);
