document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value != "" &&
      document.getElementById("email").value != "" &&
      document.getElementById("telefone").value != "" ){

    alert("Prontinho! você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome e email.")
  }
}

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
  idx++;

  if (idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);