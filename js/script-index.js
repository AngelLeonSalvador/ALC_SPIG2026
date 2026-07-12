let obras = [
  {
    nombre: "O Superman",
    anio: "1981",
    imagen: "img/anderson1.jpg",
  },
  {
    nombre: "Big Science",
    anio: "1982",
    imagen: "img/anderson2.jpg",
  },
  {
    nombre: "United States Live",
    anio: "1984",
    imagen: "img/anderson3.jpg",
  },
  {
    nombre: "Home of the Brave Soundtrack",
    anio: "1986",
    imagen: "img/anderson4.jpg",
  },
  {
    nombre: "Strange Angels",
    anio: "1989",
    imagen: "img/anderson5.jpg",
  },
  {
    nombre: "Bright Red",
    anio: "1994",
    imagen: "img/anderson6.jpg",
  },
  {
    nombre: "The Ugly One with the Jewels",
    anio: "1995",
    imagen: "img/anderson7.jpg",
  },
  {
    nombre: "Talk Normal: The Laurie Anderson Anthology",
    anio: "2000",
    imagen: "img/anderson8.jpg",
  },
  {
    nombre: "Life on a String",
    anio: "2001",
    imagen: "img/anderson9.jpg",
  },
];

let botonGaleria = document.querySelector("#boton-galeria");
let galeria = document.querySelector("#galeria");
galeria.style.display = "none";

botonGaleria.addEventListener("click", function () {
  if (galeria.style.display === "none") {
    galeria.style.display = "flex";
  } else {
    galeria.style.display = "none";
  }
});

obras.forEach(function (obra) {
  let tarjeta = `<div class="tarjeta"> 
    <div class="encabezado"> 
    <p>${obra.nombre}</p> 
    <p>${obra.anio}</p>
    </div>`;
  tarjeta += `<img src="${obra.imagen} "alt="${obra.nombre}">`;
  tarjeta += "</div>";

  galeria.innerHTML += tarjeta;
});

let cambioGaleria = document.querySelectorAll(".tarjeta");

cambioGaleria.forEach(function (tarjeta) {
  tarjeta.addEventListener("mouseover", function () {
    this.style.width = "500px";
  });

  tarjeta.addEventListener("mouseout", function () {
    this.style.width = "350px";
  });
});
