


let snakes = 0; // Start snake count at zero
setInterval(function () {
  snakes = snakes + 1;
  document.getElementById("numberofsnakes").innerHTML=snakes
  console.log("🐍", snakes);
}, 1000); // 1000 milliseconds == 1 second



document.addEventListener("click", ()=>b());
function d() {
    localStorage.setItem("snakes", c),
    localStorage.setItem("purchasedItems", JSON.stringify(s))
}
function v() {
    c = localStorage.getItem("snakes") || 0,
    s = JSON.parse(localStorage.getItem("purchasedItems")) || []
}
const numberofsnakes = localStorage.getItem("snakes");

if (numberofsnakes) {
  const input = document.querySelector("input");
  input.value = snakes;
}