
var miEdad = 35;
var edadHermano = 46;
var diferencia = edadHermano - miEdad;
var mensaje = "Nuestra diferencia de edad es ";



function saltarLinea(){
    document.write("<br>");
    document.write("<hr>");
}

function imprimir(msj){
    document.write(msj + diferencia + " años");
}

document.write("Mi edad es " + miEdad + " años");

saltarLinea();

document.write("La edad de mi hermano es " + edadHermano + " años");

saltarLinea();

imprimir(mensaje);