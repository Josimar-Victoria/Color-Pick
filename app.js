const inputColor = document.querySelector("#inputColor");
const btnVisualizar = document.querySelector("#btnVisualizar");
const parrafoExa = document.querySelector("#parrafoExa");
const cardColor = document.querySelector("#cardColor");

btnVisualizar.addEventListener("click", () => {
  console.log("me distes click");
  parrafoExa.textContent = inputColor.value;
  cardColor.style.backgroundColor = inputColor.value;

  navigator.clipboard
  .writeText(inputColor.value)
  .then(() => alert("texto copiado"))
  .catch((err) => console.log(err));
});
