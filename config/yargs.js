
//configuro comandos de terminal con yargs
const argv = require('yargs')
    // terminal >node app --base=8 or -b 8 -> recibo 8
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true, //requerido
        describe: 'Es la base de la tabla de multiplicar'
    })
    // terminal >node app --hasta=20 or -h 20 -> tabla hasta 20
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10, //no requerido
        describe: 'Valor de multiplos hasta donde quieres la tabla'
    })
    // terminal >node app --listar or -l -> lista la tabla
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false, //no requerido
        describe: 'Muestra la taba en terminal'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })
    .argv

module.exports = argv;