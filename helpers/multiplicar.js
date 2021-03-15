//requerir fs
const fs = require('fs');

const colors = require('colors');

//async devuelve siempre una promesa
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
            consola += `${base} ${'*'.red} ${i} ${'='.red} ${base * i}\n`;

        }

        if (listar) {
            console.log('=================='.yellow);
            console.log('   Tabla del '.blue, colors.blue(base));
            console.log('=================='.yellow);
            console.log(consola);
        }

        //FILESYSTEM -> .writeFile() xa grabar en archivo txt
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`Archivo tabla-${base}.txt creado`);
        // });

        //FILESYSTEM -> .writeFileSync() xa grabar en archivo txt, si se produce un error atrapar try-catch
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Archivo tabla-${base}.txt creado`;

    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}