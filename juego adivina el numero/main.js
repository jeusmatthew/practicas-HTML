// Autor: 4BMPr Ortiz Chay Jesus Mateo licencia de uso libre
var timer;
var turno = 1;
var segundosRestantes;
var numeroAleatorio;
var ganador;

function activar()
{
    document.getElementById("turno").innerText = "Turno del jugador: " + turno;
    document.getElementById("tiempoRestante").innerText = "Tiempo: " + segundosRestantes;
    document.getElementById("numJugador1").disabled = false;
    document.getElementById("btnIngresarJ1").disabled = false;
    document.getElementById("numJugador1").focus();
    document.getElementById("numJugador2").disabled = true;
    document.getElementById("btnIngresarJ2").disabled = true;
    document.getElementById("btnJugar").disabled = true;
    document.getElementById("mensaje").innerText = "";
}

function desactivar()
{
    document.getElementById("turno").innerText = "Turno del jugador: ";
    document.getElementById("tiempoRestante").innerText = "Tiempo: ";
    document.getElementById("numJugador1").value = "";
    document.getElementById("numJugador2").value = "";
    document.getElementById("numJugador1").disabled = true;
    document.getElementById("btnIngresarJ1").disabled = true;
    document.getElementById("numJugador2").disabled = true;
    document.getElementById("btnIngresarJ2").disabled = true;
    document.getElementById("btnJugar").disabled = false;
}

function iniciarJuego() 
{
    turno = 1;
    segundosRestantes = 60;
    ganador = false;
    activar();

    // Genera numero random entre 1 y 1000
    numeroAleatorio = Math.floor(Math.random() * 1000) + 1;    
    console.log(numeroAleatorio);
    timer = setInterval(reloj, 1000);

    
}

function revisar(inputJugador)
{
    console.log(inputJugador.id, inputJugador.value, inputJugador.innerText);
    var numeroUsuario;
    numeroUsuario = document.getElementById(inputJugador.id).value;

        if (numeroUsuario == numeroAleatorio)
        {
            clearInterval(timer);
            ganador = true;
            alert(`G A N A D O R  Jugador ${turno}`);
            document.getElementById("mensaje").innerText = `GANASTE JUGADOR ${turno}`;
            document.getElementById("tiempoRestante").innerText = "Tiempo: ";
            document.getElementById("turno").innerText = "Turno del jugador: ";
            desactivar();
            
        }
        else
        {
            if (numeroAleatorio > numeroUsuario)
            {
                alert("El numero es mayor");
                document.getElementById("mensaje").innerText = "El numero es mayor"
            }
            else
            {
                alert("El numero es menor");
                document.getElementById("mensaje").innerText = "El numero es menor"
            }
    
            if (turno == 1)
            {
                turno = 2;
                document.getElementById("turno").innerText = "Turno del jugador: " + turno;
                document.getElementById("numJugador1").disabled = true;
                document.getElementById("numJugador1").value = "";
                document.getElementById("btnIngresarJ1").disabled = true;
                document.getElementById("numJugador2").disabled = false;
                document.getElementById("numJugador2").focus();
                document.getElementById("btnIngresarJ2").disabled = false;
    
            }
            else
            {
                turno = 1;
                document.getElementById("turno").innerText = "Turno del jugador: " + turno;
                document.getElementById("numJugador1").disabled = false;
                document.getElementById("numJugador1").focus();
                document.getElementById("btnIngresarJ1").disabled = false;
                document.getElementById("numJugador2").disabled = true;
                document.getElementById("numJugador2").value = "";
                document.getElementById("btnIngresarJ2").disabled = true;
            }
        }


    console.log(numeroUsuario);
}

function reloj()
{
    document.getElementById("tiempoRestante").innerText = "Tiempo: " + --segundosRestantes;

    if (segundosRestantes == 0)
    {
        alert("SE ACABO EL TIEMPO")
        clearInterval(timer);
        document.getElementById("mensaje").innerText = "El numero era: " + numeroAleatorio;
        desactivar();
    }
    // console.log(segundosRestantes);

}