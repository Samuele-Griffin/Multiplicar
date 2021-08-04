const multiplicar = require('./operaciones/multiplicar.js');
const argv = require('./optimizacion/yargs.js').argv;
const colors = require('colors');

let parametro = argv._[0];

switch (parametro) {
    case 'crear':
        console.log();
        console.log(colors.yellow("Creando Archivo de la tabla de multiplicar del " + argv.base + " hasta el " + argv.limite));
        multiplicar.crearArchivo(argv.base, argv.limite);
        console.log();
        break;
    case 'listar':
        console.log();
        console.log(colors.yellow("Leyendo Archivo de la tabla de multiplicar del " + argv.base));
        console.log();
        multiplicar.leerArchivo(argv.base);
        break;
    default:
        console.log();
        console.log("Comando no valido".red);
        console.log();
        break;
}