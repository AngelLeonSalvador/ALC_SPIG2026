let obras = [];

let contador = 0;
let cantObras = 0;

let tiempoMB = 0;
let costoMB = 0;

let formCantidad = document.querySelector("#form-cantidad");
let formObras = document.querySelector("#form-obras");

let inputCantidad = document.querySelector("#cantidad");
let inputNombre = document.querySelector("#nombre");
let inputDuracion = document.querySelector("#duracion");
let inputPeso = document.querySelector("#peso");
let inputTiempo = document.querySelector("#tiempo");
let inputCosto = document.querySelector("#costo");

let btnCantidad = document.querySelector("#btn-cantidad");
let rstCantidad = document.querySelector("#rst-cantidad");
let btnAgregar = document.querySelector("#btn-agregar");
let btnReset = document.querySelector("#btn-reset");
let btnCalcular = document.querySelector("#btn-calcular");
let btnReiniciar = document.querySelector("#btn-reiniciar");

let resultado = document.querySelector("#resultado");

inputNombre.disabled = true;
inputDuracion.disabled = true;
inputPeso.disabled = true;
inputTiempo.disabled = true;
inputCosto.disabled = true;

formCantidad.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputCantidad.value == "" || inputCantidad.value <= 0) {
    alert("Ingrese una cantidad válida.");
  } else {
    cantObras = Number(inputCantidad.value);
    inputCantidad.disabled = true;
    btnCantidad.disabled = true;
    rstCantidad.disabled = true;

    inputNombre.disabled = false;
    inputDuracion.disabled = false;
    inputPeso.disabled = false;
    inputTiempo.disabled = false;
    inputCosto.disabled = false;
    btnAgregar.disabled = false;
    btnReset.disabled = false;
  }
});

formObras.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    inputNombre.value == "" ||
    inputDuracion.value <= 0 ||
    inputPeso.value <= 0 ||
    inputTiempo.value <= 0 ||
    inputCosto.value <= 0
  ) {
    alert("Complete todos los campos.");
  } else {
    tiempoMB = Number(inputTiempo.value);
    costoMB = Number(inputCosto.value);
  }
});
