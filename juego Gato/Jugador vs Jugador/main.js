var turnoJugador = 1;
var turnosTotales = 1;

function asignarSimbolo(btnID)
{
    document.getElementById(btnID).disabled = true;
    
    // if (turnoJugador == 1)
    // {
    //     document.getElementById(btnID).innerText = "X"
    //     verificaSigno();
    // }
    // else 
    // {
    //     document.getElementById(btnID).innerText = "O"
    //     verificaSigno();
    // }

    switch (turnoJugador)
    {
        case 1:
            document.getElementById(btnID).innerText = "X";
            verificaSigno();
            turnoJugador = 2;
            break;
        case 2:
            document.getElementById(btnID).innerText = "O";
            verificaSigno();
            turnoJugador = 1;
            break;
    }

    document.getElementById("turno").innerText = "Turno: " + turnoJugador;


    // console.log(btnID, "Turnos " + turnosTotales, " Turno " + turnoJugador);


    // if (turnoJugador == 1)
    // {
        
    // }
    // else 
    // {
        
    // }

    turnosTotales++;
}

function verificaSigno() 
{
    var btn1 = document.getElementById("btn1").innerText;
    var btn2 = document.getElementById("btn2").innerText;
    var btn3 = document.getElementById("btn3").innerText;
    var btn4 = document.getElementById("btn4").innerText;
    var btn5 = document.getElementById("btn5").innerText;
    var btn6 = document.getElementById("btn6").innerText;
    var btn7 = document.getElementById("btn7").innerText;
    var btn8 = document.getElementById("btn8").innerText;
    var btn9 = document.getElementById("btn9").innerText;

    if 
    (
        //Comprobación horizontal
        (btn1 == btn2 && btn2 == btn3) || (btn4 == btn5 && btn5 == btn6) || (btn7 == btn8 && btn8 == btn9) || 

        //Comprobación vertical
        (btn1 == btn4 && btn4 == btn7) || (btn2 == btn5 && btn5 == btn8) || (btn3 == btn6 && btn6 == btn9) ||

        //Comprobación diagonal
        (btn1 == btn5 && btn5 == btn9) || (btn3 == btn5 && btn5 == btn7)
    )
    {
        document.getElementById("ganador").innerText = "Has ganado Jugador " + turnoJugador;
        terminarJuego();
    } 
    else if (turnosTotales == 9)
    {
        document.getElementById("ganador").innerText = "EMPATE";
        terminarJuego();
    }
}

function terminarJuego()
{
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;
    document.getElementById("btn4").disabled = true;
    document.getElementById("btn5").disabled = true;
    document.getElementById("btn6").disabled = true;
    document.getElementById("btn7").disabled = true;
    document.getElementById("btn8").disabled = true;
    document.getElementById("btn9").disabled = true;

    document.getElementById("turno").remove();

    // restablecerBotones();
}

function iniciarJuego()
{
    turnosTotales = 1;
    turnoJugador = 1;
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn9").disabled = false;
    restablecerBotones();
}

function restablecerBotones()
{
    document.getElementById("btn1").innerText = "1";
    document.getElementById("btn2").innerText = "2";
    document.getElementById("btn3").innerText = "3";
    document.getElementById("btn4").innerText = "4";
    document.getElementById("btn5").innerText = "5";
    document.getElementById("btn6").innerText = "6";
    document.getElementById("btn7").innerText = "7";
    document.getElementById("btn8").innerText = "8";
    document.getElementById("btn9").innerText = "9";
}