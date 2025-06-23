/**
 * funciones con return
 * 
 * son funciones que utilizan una palabra clave (return)
 * que se utiliza para dfevolver un valor
 */

/**
 * El return no plasma ningun resultado en la pagina, 
 * toca colocar una instruccion parainvocar el return
 */

let resultado;

function suma(a,b){
    return a + b;
}
document.write(suma(4,4));

function saludar(){
    return "Hola a todos";
}
var mensaje = saludar();
document.write(mensaje);
document.write('<br>');

function verColor(valor){
    valor = parseInt(prompt('Ingrese un numero 1 / 4.. para obtener un color'));
    switch (valor) {
        case 1:
            return "Rojo";
        case 2:
            return "Azul";
        case 3:
            return "Verde";
        case 4:
            return "Amarillo";
        default:
            return "Error, el numero que escribiste no esta en el rango de colores";
    }
}
document.write(verColor(1));