const inquirer = require("inquirer");
const {
  addDepartmentQuestions,
  roleQuestions,
  employeeQuestions,
  updateEmployeeRoleQuestions,
} = require("./questions");
const EmployeeDatabase = require("./db/employeedatabase.js");

//creating a new instance of the EmployeeDatabase class
const db = new EmployeeDatabase({
  host: "localhost",
  user: "root",
  password: "Solsch1410",
  database: "employee_db",
});

//connecting to the database
db.connect();

function starterQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What action would you like to take?",
        name: "action_choice",
        choices: [
          "view departments",
          "view roles",
          "view employees",
          "add department",
          "add role",
          "add employee",
          "update role",
        ],
      },
    ])
    //checking each response and running add specific function based on selection from main menu questions
    .then(function (response) {
      if (response.action_choice === "view departments") {
        viewDepartments();
      } else if (response.action_choice === "view roles") {
        viewRoles();
      } else if (response.action_choice === "view employees") {
        viewEmployees();
      } else if (response.action_choice === "add department") {
        addDepartment();
      } else if (response.action_choice === "add role") {
        addRole();
      } else if (response.action_choice === "add employee") {
        addEmployee();
      } else {
         updateRole();
      }
    });
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
    .prompt(addDepartmentQuestions)
    .then((response) => {
      db.addDepartment(response).then((results) => {
        console.log(results);
        starterQuestions()
      });
    });
}

function addRole() {
  //gets the departments from the database
  db.getDepartments().then((results) => {
    //creates a var of the 3rd question in the array
    const departmentOptions = roleQuestions[2];
    //for each department that exists push the options of that department in
    results.forEach((department) => {
      departmentOptions.choices.push({
        value: department.id,
        name: department.name,
      });

    });

  });

       //run role request to inset new role into db
      //loading in the role questions containing the department options in choices
      inquirer.prompt(roleQuestions)
      .then((response) => {
        //getting the response and showing results
        db.addRole(response).then((results) =>  { 
          
          console.table(results);
        //calling starter questions
        starterQuestions();

      });

      });
  //recalling main questions
}

function addEmployee() {
  //run role request to inset new role into db
  //gets the roles from the database
  db.getRoles().then((results) => {
    //creates a var of thse 3rd question in the array of role options
    const roleOptions = employeeQuestions[2];
    //creates a summary of all the roles 
    //for each department that exists push the options of that department in
    results.forEach((role) => {
      const roleSummary = `${role.title} ${role.salary} ${role.department_name}`
        //for each role option choice, pushes the role id number and the summary of the role in
      roleOptions.choices.push({
        value: role.id,
        name: roleSummary,
      });
    });

    //gets all the employees from the database
    db.getEmployees().then((results) => {
    //grabbing the who is the manager for employee question
      const managerOptions = employeeQuestions[3];

      results.forEach((employee) => {
        //for each instance of the the question adding the employee name and id as the option to pick from 
        managerOptions.choices.push({
          value: employee.id,
          name: employee.first_name + " " + employee.last_name
        });
      });

      //pushing the manager choices in if they are wanted 
      managerOptions.choices.push({
        value: null,
        name: 'none'
      })
        inquirer.prompt(employeeQuestions).then((response) => {
          db.addEmployee(response).then((results) => {
            console.table(results)

              //recalling main questions
              starterQuestions();
          })
        })
    });
  });


}

function updateRole() {
  db.getEmployees().then((results) => {
    //grabbing the option for the first question 
      const employeeOptions = updateEmployeeRoleQuestions[0];

      results.forEach((employee) => {
        //for each instance of the the question adding the employee role to update 
        employeeOptions.choices.push({
          value: employee.id,
          name: employee.first_name + " " + employee.last_name
        });
      });
    db.getRoles().then((results)=> {
      const roleOptions = updateEmployeeRoleQuestions[1];

      results.forEach((role) => {
        //for each instance of the the question adding the employee role to update 
        roleOptions.choices.push({
          value: role.id,
          name: role.title
        });
    })
    inquirer.prompt(updateEmployeeRoleQuestions).then((response) => {
      db.updateRole(response).then((results) => {
        console.table(results);
        starterQuestions()
      })
    })
    
  })
})
}

starterQuestions()