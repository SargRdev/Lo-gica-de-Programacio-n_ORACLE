



saltoLinea=()=>{document.write("<br>");
document.write("<hr>");
};
imprimir=(msj)=>{
    document.write(msj);
saltoLinea();
};

function calculoIMC(peso,altura,nombre){
calculo = peso/(altura*altura);
imprimir("El IMC de "+nombre+" es: " + calculo);
};


calculoIMC(154,1.70,"Sergio");
calculoIMC(120,1.58,"Leonela");
  





