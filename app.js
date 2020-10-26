'use strict';

const argv = require('./config/yargs').argv;

const ToDo = require('./ToDo/Todo');
const colors = require('colors');

let command = argv._[0];

switch( command ) {

    case 'create':
        let homework = ToDo.create( argv.description );
        console.log(homework);
    break;
    
    case 'list':
        let list = ToDo.getList();
        for ( let homework of list ) {
            console.log('===== To Do ====='.green);
            console.log(homework.description);
            console.log('State: ', homework.completed);
            console.log('==========='.green);
        }
        break;    
    
    case 'update':
        let updated = ToDo.upDate(argv.description, argv.completed);
        console.log(updated);
        break;   

    case 'delete':
        let deleted = ToDo.deleteHomework(argv.description);
        console.log(deleted);
        break;  
    
    default:
        console.log('Unkown command');

}
