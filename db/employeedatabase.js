const Database = require("./database.js");
class EmployeeDatabase extends Database {
  constructor(info) {
    super(info);
  }
  getDepartments() {
    //selecting all the data from the department database and will be passed into the view departments function in index.js
    return new Promise((resolve, reject) => {
      this.db.query("SELECT * FROM department", (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results);
      });
    });
  }
  getRoles() {
    return new Promise((resolve, reject) => {
      this.db.query(
        "SELECT role.id, role.title, role.salary, department.name as department_name FROM role INNER JOIN department ON role.department_id = department.id",
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        }
      );
    });
  }
  getEmployees() {
    return new Promise((resolve, reject) => {
      this.db.query(
        `SELECT
        employee.id,
        employee.first_name,
        employee.last_name,
        role.title,
        role.salary,
        department.name,
        IF (CONCAT(manager.first_name, ' ', manager.last_name) IS NULL, '', CONCAT(manager.first_name, ' ', manager.last_name)) as manager
        FROM employee
        INNER JOIN role ON employee.role_id = role.id
        INNER JOIN department ON role.department_id = department.id
        LEFT JOIN employee as manager ON employee.manager_id = manager.id`,
        (err, results) => {
          if (err) {
            reject(err);
          }
          resolve(results);
        }
      );
    });
  }
  //query function to add a new deparment to the databse 
    addDepartment(newDepartment) {
      return new Promise((resolve, reject) => {
        this.db.query(
          //inserting the new department name from the inquirer into the database 
          'INSET INTO department ?', {name: newDepartment.deparment_name}
       ),
          (err, results) => {
            if (err) {
              reject(err);
            }
            resolve(`Your department, ${newDepartment.department_name} was added successfully`);
          };
      });
    }

    //query to inset a new role into the database 
    addRole(role) {
      return new Promise((resolve, reject) => {
        this.db.query(
          //selecting the role table to insert into 
          //inserting the new role name (title) salary and its department id from the inquirer into the database 
          'INSET INTO role ?', {title: role.title, salary:role.salary, department_id: role.department_id}
       ),
          (err, results) => {
            if (err) {
              reject(err);
            }
            resolve(`Your role, ${role.title} was added successfully`);
          };
      });

    }

    addEmployee(employee) {
      return new Promise((resolve, reject) => {
        this.db.query(
          //selecting the employee table to insert into 
          //inserting columns to the new role name (title) salary and its department id from the inquirer into the database 
          'INSET INTO employee ?', {firstName: employee.first_name, lastName: employee.last_name, roleID: employee.role_id, ManagerID: employee.manager_id}
       ),
          (err, results) => {
            if (err) {
              reject(err);
            }
            resolve(`You have successfully added a new employee, ${employee.first_name} ${employee.last_name} to your database`);
          };
      });

    }
  
}
module.exports = EmployeeDatabase;