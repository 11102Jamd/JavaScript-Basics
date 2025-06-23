let nombre, edad;
nombre = prompt("Ingresa tu nombre: ");
edad = parseInt(prompt("Ingresa tu edad: "));


if (edad >= 18) {
    document.write(nombre+" Tu edad es de: "+edad);
} else {
    if (edad < 18) {
        document.write(nombre+" Eres menor de edad ");
    } else {
        document.write('No has ingresado datos');
    }
}

