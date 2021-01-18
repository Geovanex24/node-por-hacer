// const opts = {
//     descripcion:{
//         demand: true,
//         alias: 'd',
//         desc: 'Es una descripción de la tarea por hacer'
//     }
// }

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Es una descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como complatada o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea un nuevo elemento o tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

    module.exports={
        argv
    }