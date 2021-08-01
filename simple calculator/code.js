/* Alumno: Ortiz Chay  4BMPr*/
//Variables globales
var data1 = 0, data2 = 0, dataResult = 0, operation = '';

//Definición de función 
function insertNumber(number) 
{
    if (document.getElementById("screen").value == 0) 
        document.getElementById("screen").value = number;

    else 
        document.getElementById("screen").value += number;   
}

function clearr() 
{
    document.getElementById("screen").value = 0;
    document.getElementById("memory").value = "";
    data1 = 0;
    data2 = 0;
    dataResult = 0;
    operation = '';
}

function operations(type) 
{
    data1 = document.getElementById("screen").value;
    operation = type;
    document.getElementById("memory").value = data1 + " " + operation + " ";
    document.getElementById("screen").value = 0;
}

function result() 
{
    data2 = document.getElementById("screen").value;
    document.getElementById("memory").value = data1 + " " + operation + " " + data2 + " = ";

    switch (operation)
    {
        case '+':
            dataResult = Number(data1) + Number(data2);
            break;
            
        case '-':
            dataResult = Number(data1) - Number(data2);
            break;
            
        case '×':
            dataResult = Number(data1) * Number(data2);
            break;
            
        case '÷':
            dataResult = Number(data1) / Number(data2);
            break;
    }
    document.getElementById("screen").value = dataResult;
}