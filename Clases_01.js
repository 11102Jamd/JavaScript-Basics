// declarar una clase
class Persona{
    //propiedades
    nombre = 'Homero';
    apellido = 'Simpson';
    direccion = 'Ave. Siemrpeviva 742';
    telefono = 5559908;
    email = 'amantedelacomida@aol.com';

    //metdodos
    trabajar(){
        return 'Trabaja en la planta nuclear';
    }

    estudiar(){
        return 'Escuela primaria de springfield';
    }
}

// crear un objeto correpondiente a la clase
const homero = new Persona();
document.write(homero.nombre);
document.write('<br>');
document.write(homero.apellido);
document.write('<br>');
document.write(homero.direccion);
document.write('<br>');
document.write(homero.telefono);
document.write('<br>');
document.write(homero.email);
document.write('<br>');
document.write(homero.trabajar());

const bart = new Persona();
document.write('<br>');
document.write('bart'+' '+bart.apellido);
document.write('<br>');
document.write(bart.estudiar());