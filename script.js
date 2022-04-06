//function incrementarContador() {
//  let contador = document.getElementById("contador");
//let valor = parseInt(contador.innerText);
//let valorIncrementado = valor + 1;

//  contador.innerHTML = valorIncrementado;
//}

function criarParagrafos() {
  for (let i = 0; i < 10; i++) {
    let newP = document.createElement("p");
    document.body.appendChild(newP);
    newP.innerHTML = i + 1;
  }
}
function insereTexto() {
  document.getElementById("divTeste").innerHTML =
    "Débito técnico (ou dívida técnica) é um conceito no desenvolvimento de software que representa o custo implícito de uma implementaçãos/olução pensada somente no agora, em vez de usar uma abordagem com melhor qualidade porém que levaria mais tempo.";
}
