var contador = 1;
var estaCreciendo = true;


function tempo() 
{
    document.getElementById("btnIniciar").hidden = true;
    document.getElementById("btnDetener").hidden = false;
    console.log(contador, estaCreciendo);

    document.getElementById("imgCartelera").src = "imagenes/Diapositiva" + contador + ".PNG"
    if (estaCreciendo == true)
    {
        contador++;
        if (contador == 10)
        {
            estaCreciendo = false;
        }
    }
    else 
    {
        contador--;
        if (contador == 1)
        {
            estaCreciendo = true;
        }
    }

    
}

function detenerTemporizador()
{
    document.getElementById("btnIniciar").hidden = false;
    document.getElementById("btnDetener").hidden = true;
    clearInterval(temporizador);
}