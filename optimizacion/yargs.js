let variables = require('./variables.js');

const argv = require('yargs')
    .command('crear', 'se crea la tabla de multiplicar en cuanto a una base y aun limite', variables.variables)
    .command('listar', 'se listan la tabla de multiplicar en funcion a un numero dado, si esta almacenado en la carpeta de files', variables.variables)
    .help()
    .argv;

module.exports = { argv };