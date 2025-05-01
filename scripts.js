function paraMaiusculo() {
  const texto = document.getElementById("entrada").value;
  const resultado = texto.toUpperCase();
  document.getElementById("resultado").textContent = resultado;
}

function paraMinusculo() {
  const texto = document.getElementById("entrada").value;
  const resultado = texto.toLowerCase();
  document.getElementById("resultado").textContent = resultado;
}

function primeiraMaiuscula() {
  const texto = document.getElementById("entrada").value.toLowerCase();
  const resultado = texto.charAt(0).toUpperCase() + texto.slice(1);
  document.getElementById("resultado").textContent = resultado;
}

function textoInvertido() {
  const texto = document.getElementById("entrada").value;
  const resultado = texto.split("").reverse().join("");
  document.getElementById("resultado").textContent = resultado;
}

function copiarTexto() {
  const texto = document.getElementById("resultado").textContent;
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado!");
    })
    .catch(() => {
      alert("Erro ao copiar.");
    });
}
