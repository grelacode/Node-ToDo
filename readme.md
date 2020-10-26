## To-Do APP

This was my first node-app, so I like to share with you !

This is a console app that using Yargs, to deploy and try it, read de following instructions:

- You must have NodeJS installed.
- Clone this repo on your local https://github.com/grelacode/Node-ToDo.git
- On the main project directory, type on console ```npm install```, this command installs all project dependencies.
- How to use it, console commands:

  - Create a new task: ```node app create -d "a new task"```
  - List all your tasks: ```node app list```
  - Switch a task state (completed or not): ```node app update -d putYourTaskHere -c true/false```
  - Delete a task: ```node app delete -d "taskToDelete"```


