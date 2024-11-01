//MENU HAMBURGUESA

const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('show');
});

//CARRUSEL DE CARDS 
const list = document.querySelector(".products__container");
const prevButton = document.querySelector(".products__prev");
const nextButton = document.querySelector(".products__next");

const item = document.querySelector(".product__card");
const itemWidth = item.offsetWidth;

function updateButtonVisibility() {
  const scrollLeft = list.scrollLeft;
  const maxScrollLeft = list.scrollWidth - list.clientWidth;

  if (scrollLeft === 0) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'block';
  }

  if (scrollLeft >= maxScrollLeft) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }
}

function handleClick(direction) {
  if (direction === "previous") {
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
  } else {
    list.scrollBy({ left: itemWidth, behavior: "smooth" });
  }
  setTimeout(updateButtonVisibility, 500);
}

updateButtonVisibility();

//CONTADOR HACIA ATRAS

// FECHA DE LA CONFERENCIA
let countDownDate = new Date("10 31, 2024 10:00:00").getTime();

// ACTUALIZA EL CONTADOR CADA 1000ms O 1 SEGUNDO
let x = setInterval(function() {

  let ahora = new Date().getTime();    
  let falta = countDownDate - ahora;

  // DURA 4 DIAS, 23 DE ENERO 2025, 9PM. EN EL CENTRO CULTURAL CEINA
  // SI YA LLEGÓ EL DÍA
  if (falta < 0) { 
    let h3 = document.createElement("h3");
    let h3Text = document.createTextNode("¡Ya comenzó!")
    h3.appendChild(h3Text)
    h3.classList.add("already_start")
    let p = document.createElement("p");
    let pText = document.createTextNode("Puedes ver las charlas en vivo o sus grabaciones en el siguiente canal");
    p.appendChild(pText);
    p.classList.add("already_start")
    let ctaButtonOriginal = document.getElementById("cta");
    let ctaButtonClone = ctaButtonOriginal.cloneNode(true);
    ctaButtonClone.setAttribute("href", "https://www.youtube.com/watch?v=VS3ERmCsM_o&list=PLjnstNlepBvO0-I7iwqpkOY_fwAop6Pl-");
    ctaButtonClone.textContent  = "VER LAS CHARLAS";
    document.getElementById("contador").innerHTML = "";
    ctaButtonOriginal.remove();
    document.getElementById("banner-contador").appendChild(h3);
    document.getElementById("banner-contador").appendChild(h3);
    document.getElementById("banner-contador").appendChild(p);
    document.getElementById("banner-contador").appendChild(ctaButtonClone);
    clearInterval(x);
  }

  // CALCULO DE LOS DIAS, HORAS, MINUTOS Y SEGUNDOS.
  let dias = Math.floor(falta / (1000 * 60 * 60 * 24));
  let horas = Math.floor((falta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((falta % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((falta % (1000 * 60)) / 1000);
    
  // MOSTRAR LOS RESULTADOS
  document.getElementById("dias").innerHTML = dias;
  document.getElementById("horas").innerHTML = horas;
  document.getElementById("minutos").innerHTML = minutos;
  document.getElementById("segundos").innerHTML = segundos;

}, 1000);