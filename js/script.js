
function restarCuadro(){
    let restar = parseInt(document.getElementById("numeroContadorId").innerHTML) - 1;
    document.getElementById("numeroContadorId").innerHTML = restar;
    
    if(restar < -0){
        let colorActual = "red";
        let styleElemento =document.getElementById("numeroContadorId");
        styleElemento.style.color = colorActual
    }else if(restar == 0){
        let colorActual = "black";
        let styleElemento =  document.getElementById("numeroContadorId");
        styleElemento.style.color = colorActual;
    }
}

function sumarCuadro(){
    let incrementar = parseInt(document.getElementById("numeroContadorId").innerHTML) + 1;;
    document.getElementById("numeroContadorId").innerHTML = incrementar;

    if(incrementar > 0){
        let colorActual = "green";
        let styleElemento =  document.getElementById("numeroContadorId");
        styleElemento.style.color = colorActual;
    }else if(incrementar == 0){
        let colorActual = "black";
        let styleElemento =  document.getElementById("numeroContadorId");
        styleElemento.style.color = colorActual;
    }
}

function resetearCuadro(){
    let numeroCero = document.getElementById("numeroContadorId")
   numeroCero.innerHTML = 0;
}

