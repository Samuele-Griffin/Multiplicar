const fs = require('fs');
const colors = require('colors');

let crearArchivo = async(base, limite) => {
    let operacion = '';
    if (Number(base)) {
        for (let numero = 0; numero <= limite; numero++) {
            operacion += (`${base} * ${numero} = ${base * numero}\n`).toString();
        }
        fs.writeFile(`./files/tabla-${base}.txt`, operacion, (err) => {
            if (err) {
                throw new Error(err);
            }
            console.log("Tabla de multiplicar del ".green + base.toString().green + " creada con exito".green);
        })
    } else {
        console.log("La base no es un numero entero".red);
    }
};

let leerArchivo = async(base) => {
    if (Number(base)) {
        fs.readFile(`./files/tabla-${base}.txt`, "utf-8", (err, data) => {
            if (err) {
                throw new Error(err);
            }
            console.log(data.green);
        })
    } else {
        console.log("No es un numero entero".red);
    }
}

module.exports = { crearArchivo, leerArchivo };