function calculo() {
  let serv = 0;
  let valr = document.getElementById("valr");

  if (document.getElementById("pintura").checked) {
    serv = serv + 2000;
  }
  if (document.getElementById("torcaOleo").checked) {
    serv = serv + 100;
  }
  if (document.getElementById("polimento").checked) {
    serv = serv + 25;
  }
  if (document.getElementById("limpeza").checked) {
    serv = serv + 30;
  }

  valr.innerHTML = "R$ " + serv + ",00";
}
