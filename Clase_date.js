//trae zona horaria del sistema Operativo
const fechaActual = new Date();
document.write(fechaActual);
document.write('<br>');

let fecha = new Date();
//ver solo que fecha es hoy
document.write('Hoy es ',fecha.getDate());
document.write('<br>');
document.write('El mes es: ',fecha.getMonth()+1);
document.write('<br>');
document.write('El año es: ',fecha.getFullYear());
document.write('<br>');
document.write('La hora actual es: ',fecha.getHours()+':',
        fecha.getMinutes()+':',
        fecha.getSeconds()+':',
        fecha.getMilliseconds());
document.write('<br>');
document.write();
document.write('<br>');