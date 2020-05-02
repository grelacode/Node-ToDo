const description = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pepndiente una tarea'
};

const argv = require('yargs')
    .command('create', 'agrega una nueva tarea a la lista', {
        description
    })
    .command('update', 'actualiza el estado completado de una tarea', {
        description,
        completed
    })
    .command('delete', 'borra una tarea de mi lista', {
        description
    })

.help()
.argv;




module.exports = {
    argv
}