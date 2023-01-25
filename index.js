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
            viewDepartments()
       }

       else if(response.action_choice === 'view roles'){
            viewRoles()

        }

        else if(response.action_choice === 'view employees'){
            viewEmployees()

       }

       else if(response.action_choice === 'add departments'){
            addDepartment()

        }
        else if(response.action_choice === 'add role'){
             addRole()

        }
        
        else if(response.action_choice === 'add employee'){
            // addManager()

        }

        else {
            //add function to update roles 
        }


       
     })
}

function viewDepartments() {
    //get departments from database and console logs database in table 
    db.getDepartments().then((results) => {
        console.table(results);
    //then restarts menu questions
        starterQuestions();
    });
}

function viewRoles() {
    //get roles from database and console logs database in table 
    db.getRoles().then((results) => {
        console.table(results);
        starterQuestions();
    });
}

function viewEmployees() {
    //get departments from database and console logs database in table 
    db.getEmployees().then((results) => {
        console.table(results);
        starterQuestions();
    });
}

function addDepartment() {
    inquirer
//calling the questions to add depatment 
        .prompt(AddDepartmentQuestions)
        .then((response) => {
            db.addDepartment(response).then((results) => {
                console.log(results);
                MenuQuestions();
            }); 
        })
}

function addRole() {

}