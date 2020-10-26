'use strict';

const fs = require('fs');

let ToDoList = [];

const saveDB = () => {

    let data = JSON.stringify(ToDoList);

    fs.writeFile('./db/data.json', data,  (err) => {
        if (err) throw err;
        console.log('Saved!');
      });      
}

const loadDB = () => {   
    try {
        ToDoList = require('../db/data.json');
      }
      catch(err) {
        ToDoList = []
      }
      
}

const create = (description) => {

    loadDB();

    let ToDo = {
        description,
        completed: false
    };

    ToDoList.push(ToDo);

    saveDB();

    return ToDo;

    }

const getList = () => {

    loadDB();
    
    return ToDoList;

}    

const upDate = (description, completed = true) => {

    loadDB();

    let index = ToDoList.findIndex(homework => homework.description === description);
    if (index >= 0) {
        ToDoList[index].completed = completed;
                saveDB();
        return true;
    } else {
        return false;
    }
    
}

const deleteHomework = (description) => {
    
    loadDB();

    let index = ToDoList.findIndex(homework => homework.description === description);
    if (index >= 0) {
        ToDoList.splice(index, 1);
        saveDB();
        return true;
    } else {
        return false;        
    }

}

module.exports = {
    create,
    getList,
    upDate,
    deleteHomework
}
