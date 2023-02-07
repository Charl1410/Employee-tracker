# Employee tracker 

## Table of contents

* [Description](#Description)

* [Instillation](#Instillation)

* [Usage](#Usage)

* [Demo](#Demo)

* [Licence](#License)

## Description

The purpose of this application is to track employees in a back-end database using MYSQL to create, seed and manage data. The application criteria is as follows:

```markdown
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Initialisation

To use this application node.js must be installed: https://nodejs.org/en/download/ <br />

**The packages required are:**

* **MYSQL2**  

* **Inquirer** @8.4.2

All dependencies should already be in the package.json file and installed through running ```npm i``` in the terminal.

## Usage

To use this application all dependencies must be installed. <br>

To run the application:

* The data base must be created by logging into mysql `mysql -u root -p` and running the command `source db/schema.sql`

* To seed the database run `source db/seeds.sql`

* Finally run `npm run start` to get the application running 

## Demo
