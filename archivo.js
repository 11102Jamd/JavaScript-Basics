// variables (son dinamicas)
// var/let  - vas a crear una variable
// var nombre; // declaro variable
// nombre = 'Juan'; // inicializar 
// var se utiliza para declara una variable global
// var nombre = 'Juan';
// var Nombre = 'Alejandro';
// // let cuando se declara una varaible local
// let saludo = 'Hola';
// document.write(saludo+' '+Nombre)



/*Tipos de datos en JS*/
// javascript y php son de tipado dinamico
// let nombre = 'Juan';
// let cantidad = 42
// let precio = 10.55
// let verdad = true;
// let falso = false;
// let nulo = null; 
// let dicc = {persona: 'juan', edad: 40};//  objeto y sus propiedades

// document.write(cantidad);
// document.write("<br>"); // salto de linea
// document.write(precio);
// document.write("<br>");
// document.write(verdad)
// document.write("<br>");
// document.write(falso);
// document.write("<br>");
// document.write(nombre);
// document.write("<br>");
// document.write(nulo)
// document.write("<br>")
// document.write(dicc.edad)
// la concatenacion en js tambienes con + al igual que python 
// se puede usar concat pero esta queda pedgada directamente con el otro string
// let nombre = 'juan';
// let apellido = 'muñoz';

// let saludo = nombre.concat(apellido)
// document.write(saludo)



// como solicitar datos externos a nuestro programa 
// prompt se utiliza para capturar datos en JS



// constantes (son una variable cuyo valor no puede ser cambiado durante la ejecucucion de un programa)
// siempre ; al final
// const precio = 100;
// document.write(precio);
// document.write('<br>');
// precio = 200;
// document.write(precio);



// operadores matematicos JS
a,b,sum, res, mult, div, resid, poten;
// pedir datos al usuario
a = parseFloat(prompt('Ingrese el valor de A...'))// captueramos el dato por teclado y lo convertimos a float;
b = parseFloat(prompt('Igrese el valor de b...'));
// suma
sum = a + b;
// resta
res = a - b;
// MULTPLICACION
mult = a * b;
// division
div = a / b;
// Residuo
resid = a % b;
// potencia
poten = a ** b;
document.write('la suma es: '+sum);
document.write('<br>');
document.write('la resta es: '+res);
document.write('<br>');
document.write('la multiplicacion es: '+mult);
document.write('<br>');
document.write('la division es: '+div);
document.write('<br>');
document.write('el residuo es: '+resid);
document.write('<br>');
document.write('la potencia es: '+poten);
document.write('<br>');




//operadores de asginacion, incremento y decremento

let a = 1;
document.write('Valor de a: ',a);
document.write('<br>');
a++;// este operador aumenta el valor en 1
document.write('Valor de a: ',a);
document.write('<br>');
a+=5; // este operador aumenta el valor de la variable dependiendo la cantidad final
document.write('Valor de a: ',a);
document.write('<br>');
a--;// este operador decrementa el valor en 1
document.write('Valor de a: ',a);
document.write('<br>');
a-=3;// este operador decrementa el valor de la variable dependiendo la cantidad final
document.write('Valor de a: ',a);
document.write('<br>');
a *= 2; // mutltiplica a la variable la cantidad final
document.write('Valor de a: ',a);
document.write('<br>');
a /= 3;// divide la variable entre el valor final
document.write('valor de a: ',a);
document.write('<br>');
a**=2;// eleva la potencia al valor final
document.write('valor de a: ',a);




// operadores de comparacion
let  valor1, valor2;
valor1 = 20;
valor2 = 10;

document.write(valor1 > valor2); // es mayor
document.write('<br>');
document.write(valor1 < valor2); // es menor
document.write('<br>');
document.write(valor1 == valor2);// es igual
document.write('<br>');
document.write(valor1 >= valor2);// es mayor igual
document.write('<br>');
document.write(valor1 <= valor2);// es menor igual
document.write('<br>');
document.write(valor1 != valor2);// es diferente
/// Funciones matematicas 
// redondear

var precio = Math.round(399.54);

document.write('precio redondeado: ')









