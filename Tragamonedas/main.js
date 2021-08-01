// var myVar = setInterval(miTimer, 0);
var contador1 = 0, contador2 = 0, contador3 = 0;

function miTimer()
{
    document.getElementById("btnIniciar").hidden = true;
    document.getElementById("btnDetener").hidden = false;
    var date = new Date();

    // contador1 = 1;
    // contador2 = 1;
    // contador3 = 1;

    document.getElementById("demo").innerHTML = date.toLocaleTimeString();

    contador1 = Math.floor(Math.random() * 5) + 1;
    document.getElementById("img1").src = "imagenes/imagen" + contador1 + ".jpg";

    contador2 = Math.floor(Math.random() * 5) + 1;
    document.getElementById("img2").src = "imagenes/imagen" + contador2 + ".jpg";
    
    contador3 = Math.floor(Math.random() * 5) + 1;
    document.getElementById("img3").src = "imagenes/imagen" + contador3 + ".jpg";

    // if (contador == 3)
    // {
    //     contador = 0;
    // }
}

function detenerTimer() 
{
    document.getElementById("btnIniciar").hidden = false;
    document.getElementById("btnDetener").hidden = true;

    if (contador1 == contador2 && contador2 == contador3)
    {
        alert("HAS GANADOOOOO");
    }
    else 
    {
    alert("HAS PERDIDOOO")
    }
    // window.clearInterval();
    clearInterval(myVar);
}