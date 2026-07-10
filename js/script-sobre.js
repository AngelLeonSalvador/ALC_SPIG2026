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

let infoSobre = [
  {
    identificador: "cruces",
    encabezado: "sobre.html",
    texto:
      "Laurie Anderson ha sido una pionera en la incorporación de nuevas tecnologías en el arte. Desde instrumentos modificados hasta sistemas digitales, su trabajo investiga cómo la tecnología puede influir en la creación y la percepción artística. Este cruce ha permitido ampliar las posibilidades del arte contemporáneo, integrando herramientas que transforman tanto los procesos como los resultados. Su obra continúa siendo relevante en un contexto donde la tecnología ocupa un lugar central en la cultura.",
  },
  {
    identificador: "Big Science",
    encabezado: "1982",
    texto: "img/anderson2.jpg",
  },
];

let btnDatos = document.querySelector("#datos-curiosos");
let datoTexto = document.querySelector("#dato-texto");

btnDatos.addEventListener("click", function () {
  const random = Math.floor(Math.random() * datosCuriosos.length);
  let datoRand = `<p>${datosCuriosos[random]}</p>`;

  datoTexto.innerHTML = datoRand;
});
