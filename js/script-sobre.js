const datosCuriosos = [
  "Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo.",
  "Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido.",
  "Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores.",
  "Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013.",
  "En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial.",
  "Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017.",
  "Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras.",
  "Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala.",
  "Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía.",
  "Sigue siendo una figura activa e influyente en el arte digital y ha experimentado con inteligencia artificial en proyectos recientes.",
];

let imgRando = [
  {
    nombre: "Four Talks - Hirshhorn Museum",
    imagen: "img/anderson-1.jpg",
  },
  {
    nombre: "The Chalkroom - MASS MoCA",
    imagen: "img/anderson-2.jpg",
  },
  {
    nombre: "Songs and Stories for Moby Dick",
    imagen: "img/anderson-3.jpg",
  },
  {
    nombre: "Chalkroom & Aloft - MASS MoCA",
    imagen: "img/anderson-4.jpg",
  },
  {
    nombre: "The Weather - Hirshhorn Museum",
    imagen: "img/anderson-5.jpg",
  },
  {
    nombre: "Looking into a Mirror Sideways - Moderna Museet",
    imagen: "img/anderson-6.jpg",
  },
  {
    nombre: "Four Talks - Sculpture Garden",
    imagen: "img/anderson-7.jpg",
  },
  {
    nombre: "The Waters Reglitterized - Sean Kelly",
    imagen: "img/anderson-8.jpg",
  },
  {
    nombre: "BOAT - Vito Schnabel",
    imagen: "img/anderson-9.jpg",
  },
  {
    nombre: "United States Parts 1 to 4 - Moderna Museet",
    imagen: "img/anderson-10.jpg",
  },
];

let btnObras = document.querySelector("#obras");
let btnCruces = document.querySelector("#cruces");
let btnLeng = document.querySelector("#lenguaje");
let btnPerf = document.querySelector("#performance");
let btnDatos = document.querySelector("#datos-curiosos");

let txtObras = document.querySelector("#contenido-obras");
let txtCruces = document.querySelector("#contenido-cruces");
let txtLeng = document.querySelector("#contenido-lenguaje");
let txtPerf = document.querySelector("#contenido-performance");
let txtDato = document.querySelector("#dato-texto");

let imgSobre = document.querySelector("#img-sobre");

function ocultarTodo() {
  txtObras.style.display = "none";
  txtCruces.style.display = "none";
  txtLeng.style.display = "none";
  txtPerf.style.display = "none";
  txtDato.style.display = "none";
}

function imagenRandom() {
  const rand = Math.floor(Math.random() * imgRando.length);
  let imgRand = `<img src="${imgRando[rand].imagen}"alt="${imgRando[rand].nombre} /">`;

  imgSobre.innerHTML = imgRand;
}

txtObras.style.display = "flex";
imagenRandom();

btnObras.addEventListener("click", function () {
  ocultarTodo();
  txtObras.style.display = "flex";
  imagenRandom();
});

btnCruces.addEventListener("click", function () {
  ocultarTodo();
  txtCruces.style.display = "flex";
  imagenRandom();
});

btnLeng.addEventListener("click", function () {
  ocultarTodo();
  txtLeng.style.display = "flex";
  imagenRandom();
});

btnPerf.addEventListener("click", function () {
  ocultarTodo();
  txtPerf.style.display = "flex";
  imagenRandom();
});

btnDatos.addEventListener("click", function () {
  ocultarTodo();
  txtDato.style.display = "flex";

  const random = Math.floor(Math.random() * datosCuriosos.length);
  let datoRand = `<p>${datosCuriosos[random]}</p>`;

  txtDato.innerHTML = datoRand;
  imagenRandom();
});
