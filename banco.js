let saldo = document.getElementById("saldo")

let visivel = true

document.querySelector(".verSaldo").onclick = function(){

if(visivel){

saldo.innerText = "••••••"

visivel = false

}else{

saldo.innerText = "R$ 2.500,00"

visivel = true

}

}
