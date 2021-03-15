
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const colors = require('colors');

console.clear();

// terminal >node app --base=8 or --b=8 -> recibo 8
// yargs xa leer variables de banderas en terminal
// console.log(argv);
// console.log('base: yargs', argv.base);

// const [, , arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split('=');
// si escribo terminal >node app --base=8 -> recibo 8
// console.log(base);

// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.yellow, 'creado'))
    .catch(err => console.log(err));

