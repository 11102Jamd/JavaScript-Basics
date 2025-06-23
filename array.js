// delcaracion de un array
let numeros = [15,80,50.3,-10];
document.write(numeros.length);
document.write('<br>');
document.write(numeros[2]);
document.write('<br>');
document.write('<br>');

let frutas = ['manzanas', 'peras','naranjas','mangos','limones'];
document.write(frutas.length);
document.write('<br>');
document.write(frutas[2]);
document.write('<br>');

// metodos/funciones internas que tiene javaScript para trabahjar con arrays
// ver cantidad de elementos
document.write('cantidad: ',numeros.length);
document.write('<br>');
// saber ultimo elemento
document.write('ukltimo elemento: ',numeros[numeros.length-1]);// el sistema busca la cantidad completa de elementos y le resta 1
document.write('<br>');

// arrays den tipo texto
document.write('string: ',numeros.toString());
document.write('<br>');

// unir tipos de arrrays
let letras = ['a','b','c','d','e','f'];
let numeros2 = [1,2,3,4,5,6,7,8,9];
document.write('alfanumerico: ',letras.concat(numeros2));
document.write('<br>');


//como borrar un elemento del array
numeros.pop();
document.write(numeros);
document.write('<br>');

//agregar un elemento al final del array
numeros.push('4');// push agrega un valor al final del array
document.write(numeros);
document.write('<br>');

//eliminar el primer elemento
numeros.shift();
document.write(numeros);
document.write('<br>');

//agragar elemwentos al inicio
numeros.unshift(1000);
document.write(numeros);
document.write('<br>');


//eliminar numeros a partir de un punto
numeros.splice(2,3);
document.write(numeros);
document.write('<br>');


let cntidades = [100,20,30,80,67]
let copia = cntidades.slice(1,4); // trae los valores de la posicion a la anterior
document.write('Array copia: '+copia);

// sort 
let objetos = ['carro','maleta', 'botella', 'planeta','zorro'];
document.write(objetos.sort());// trae en orden alfateico el array
document.write('<br>');


// ver array en reversa
document.write(objetos.reverse()); // los trae en orden alfabetico desendente
document.write('<br>');
