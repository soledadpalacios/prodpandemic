/* Place your JavaScript in this file */
/*function sorteoSeisPaises() {
  //  numeroCarta=Math.floor(Math.random() * 6) + 1;

  var client = new XMLHttpRequest();
  client.open("GET", "/ejemploCartaPais.html");
  idHTML = "cartaPais1";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  //client2 = new XMLHttpRequest();
  client.open("GET", "/ejemploCartaPais.html");
  idHTML = "cartaPais2";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}*/
var pais = "";

function muestrapais() {
  /* let paises = [
    "aguzzi.html",
    "aguzzi2.html",
    "aguzzi3.html",
    "aguzzi4.html",
    "gimenezyob1.html",
    "gimenezyob2.html",
    "gimenezyob3.html",
    "gimenezyob4.html",
    "arrambide2.html",
    "arrambide1.html",
    "arrambide3.html",
    "arrambide4.html",
    "lebeau1.html",
    "lebeau2.html",
    "lebeau3.html",
    "lebeau4.html",
    "Reartes1.html",
    "Reartes2.html",
    "Reartes3.html",
    "Reartes4.html",
    "olivarossi1.html",
    "olivarossi2.html",
    "olivarossi3.html",
    "olivarossi4.html",
    "Coldorf1.html",
    "Coldorf2.html",
    "Coldorf3.html",
    "Coldorf4.html",
    "ottosen1.html",
    "ottosen2.html",
    "ottosen3.html",
    "ottosen4.html",
    "topa1.html",
    "topa2.html",
    "topa3.html",
    "topa4.html",
    "ulises1.html",
    "ulises2.html",
    "ulises3.html",
    "ulises4.html",
    "Manera1.html",
    "Manera2.html",
    "Manera3.html",
    "Manera4.html",
    "freiberg1.html",
    "freiberg2.html",
    "freiberg3.html",
    "freiberg4.html",
    "zugaro1.html",
    "zugaro2.html",
    "zugaro3.html",
    "zugaro4.html",
    "Sangoi1.html",
    "Sangoi2.html",
    "Sangoi3.html",
    "Sangoi4.html",
    "Britos.html",
    "Britos2.html",
    "Britos3.html",
    "Britos4.html",
    "SantaCruz1.html",
    "SantaCruz2.html",
    "SantaCruz3.html",
    "SantaCruz4.html",
    "Tejeda1.html",
    "Tejeda2.html",
    "Tejeda3.html",
    "Tejeda4.html",
    "Monjes1.html",
    "Monjes2.html",
    "Monjes3.html",
    "Monjes4.html",
    "Bustos1.html",    
    "Bustos2.html",    
    "Bustos3.html",    
    "Bustos4.html",
     "avancini1.html",   
     "avancini2.html",   
     "avancini3.html",   
     "avancini4.html",   
     "Marchesini1.html",
     "Marchesini2.html",
     "Marchesini3.html",
     "Marchesini4.html",
     "HERNANDEZ1.html",
     "HERNANDEZ2.html",
     "HERNANDEZ3.html",
     "HERNANDEZ4.html"

     



  ];
  */
  let paises = ["Coldorf1.html"];
  var idHTML;
  document.getElementById("comienzaEventosYa").style.display = "inline";
  //document.getElementById("izquierda").style.display = "none";
  var x = document.getElementById("comienzaJuego");

  x.style.display = "none";

  var x = document.getElementById("comienzaEventosYa");
  x.style.display = "block";
  document.getElementById("izquierda").setAttribute("style", "display:none");
  document.getElementById("derecha").setAttribute("style", "width:90%");

  var sorteo = Math.floor(Math.random() * paises.length);
  var client = new XMLHttpRequest();
  client.open("GET", "/paises/" + paises[sorteo]);
  idHTML = "cartaPais1";

  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}

function pedirCartaEvento() {
  document.getElementById("comienzaJuego").innerHTML = "";

  var client = new XMLHttpRequest();
  client.open("GET", "/eventoCarta1.html");
  idHTML = "evento";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  identificadorDeTemporizador = setTimeout(funcionConRetraso, 3000);
  client.send();
}
function muestraEventos() {
  document.getElementById("comienzaEventosYa").style.display = "none";

  //document.getElementById("right").style.width = "100%";

  //document.getElementById("eventos").style.display = "inline";

  var client = new XMLHttpRequest();
  let eventos = ["eventos/educacionzugaro.html"];

  client.open("GET", "/eventoCarta1.html");
  idHTML = "evento";

  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  identificadorDeTemporizador = setTimeout(funcionConRetraso, 30000);
  client.send();
}
function zugaroDecision1() {
  clearTimeout(identificadorDeTemporizador);
  var educacion = document.getElementById("educacion").innerText;
  alert(educacion);
  educacion = educacion - 20;
  educacion = document.getElementById("educacion").innerHTML = educacion;
}
function zugaroDecision2() {
  clearTimeout(identificadorDeTemporizador);
  var educacion = document.getElementById("educacion").innerText;
  alert(educacion);
  educacion = educacion + 10;
  educacion = document.getElementById("educacion").innerHTML = educacion;
}
function zugaroDecision3() {
  clearTimeout(identificadorDeTemporizador);
  var educacion = document.getElementById("educacion").innerText;
  alert(educacion);
  educacion = Math.floor(educacion);
  educacion = educacion + 10;
  educacion = document.getElementById("educacion").innerHTML = educacion;
}

function muestrapaisr() {
  var client = new XMLHttpRequest();
  client.open("GET", "/ejemploCartaPais.html");
  idHTML = "cartaPais1";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}

function muestrapais2() {
  var client = new XMLHttpRequest();
  client.open("GET", "/ejemploCartaPais2.html");
  idHTML = "cartaPais2";
  client.onreadystatechange = function () {
    document.getElementById(idHTML).innerHTML = client.responseText;
  };
  client.send();
}
function muestrainfo2() {
  alert("rellenar con datos del país");
}

function palaciosDecision1() {
  var economia = document.getElementById("economia").innerText;
  economia = Math.floor(economia);
  economia = economia + 20;
  document.getElementById("sudanEconomia").innerHTML = economia;
  if (economia < 60) dictadura();
}

function funcionConRetraso() {
  alert("Three seconds have elapsed.");
}

function dictadura() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

function pedirCartaEventoAvancini() {
  document.getElementById("comienzaJuego").innerHTML = "";
  var x = document.getElementById("miCartaEvento");
  x.style.display = "inline";
  identificadordeTemporizador = setTimeout(santinoavanciniDecision2, 30000);
}
function santinoavanciniDecision1() {
  var economia = document.getElementById("economia").innerText;

  economia = economia - 20;
  economia = document.getElementById("economia").innerHTML = economia;

  situacionsanitaria = document.getElementById("situacionsanitaria").innerText;

  situacionsanitaria = parseInt(situacionsanitaria) + 20;
  situacionsanitaria = document.getElementById(
    "situacionsanitaria"
  ).innerHTML = situacionsanitaria;
  clearTimeout(identificadordeTemporizador);
}
function santinoavanciniDecision2() {
  var educacion = document.getElementById("educacion").innerText;

  educacion = educacion - 30;
  educacion = document.getElementById("educacion").innerHTML = educacion;
  clearTimeout(identificadordeTemporizador);
}

function santinoavanciniDecision3() {
  var economia = document.getElementById("economia").innerText;

  economia = economia - 20;
  economia = document.getElementById("economia").innerHTML = economia;

  situacionsanitaria = document.getElementById("situacionsanitaria").innerText;
  situacionsanitaria = parseInt(situacionsanitaria) + 20;
  situacionsanitaria = document.getElementById(
    "situacionsanitaria"
  ).innerHTML = situacionsanitaria;
  clearTimeout(identificadordeTemporizador);
}
function reartesDecision1() {
  clearTimeout(identificadorDeTemporizador);
  var economia = document.getElementById("economia").innerText;
  alert(economia);
  economia = economia - 10;
  economia = document.getElementById("economia").innerHTML = economia;
}
function reartesDecision2() {
  clearTimeout(identificadorDeTemporizador);
  var economia = document.getElementById("economia").innerText;
  alert(economia);
  economia = economia - 10;
  economia = document.getElementById("economia").innerHTML = economia;
}
function reartesDecision3() {
  clearTimeout(identificadorDeTemporizador);
  var economia = document.getElementById("economia").innerText;
  alert(economia);
  economia = Math.floor(economia);
  economia = economia + 10;
  economia = document.getElementById("economia").innerHTML = economia;
}
