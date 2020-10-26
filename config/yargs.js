'use strict';

const description = {
    demand: true,
    alias: 'd',
    desc: 'Task description'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'Tick a completed task'
};

const argv = require('yargs')
    .command('create', 'Add a new task in the list', {
        description
    })
    .command('update', 'Update an task state', {
        description,
        completed
    })
    .command('delete', 'Delete one task from the list', {
        description
    })

.help()
.argv;

module.exports = {
    argv
}
