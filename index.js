const inquirer = requre('inquirer');
const {AddDepartmentQuestions,  }
const EmployeeDatabase = require('./db/employeedatabase.js');

//creating a new instance of the EmployeeDatabase class 
const db = new EmployeeDatabase({
    host: 'localhost',
    user: 'root',
    password: 'Solsch1410',
    database: 'employee_db'
});

//connecting to the database 
db.connect()


 
function starterQuestions() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What action would you like to take?',
            name: 'action_choice',
            choices: ['view departments', 'view roles', 'view employees', 'add department', 'add role', 'add employee', 'update role']

        },

    ])
    //checking each response and running add specific function based on selection from main menu questions
    .then(function(response) {
        if(response.action_choice === 'view departments'){
            // addEngineer()
       }

       else if(response.action_choice === 'view roles'){
            // addIntern()

        }

        else if(response.action_choice === 'view employees'){
            // addManager()

       }

       else if(response.action_choice === 'add departments'){
        // addManager()

        }
        else if(response.action_choice === 'add role'){
            // addManager()

        }
        
        else if(response.action_choice === 'add employee'){
            // addManager()

        }

        else {
            //add function to update roles 
        }

     

       //else build the team
    //    else buildTeam(managerArray, engineerArray, internArray);


       
     })
}