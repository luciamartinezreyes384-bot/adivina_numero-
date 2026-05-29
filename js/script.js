let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function comprobar() {

    let numero = parseInt(
        document.getElementById("numero").value
    );

    let resultado =
        document.getElementById("resultado");

    if(numero === numeroSecreto){
        resultado.innerHTML = "¡Ganaste!";
        numeroSecreto =
            Math.floor(Math.random() * 10) + 1;
    }
    else if(numero < numeroSecreto){
        resultado.innerHTML =
            "El número es mayor";
    }
    else{
        resultado.innerHTML =
            "El número es menor";
    }
}
