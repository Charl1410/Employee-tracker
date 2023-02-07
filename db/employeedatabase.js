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
  //passing in newDepartment into this function
  //   addDepartment(newDepartment) {
  //     return new Promise((resolve, reject) => {
  //       this.db.query(
  //         'INSET INTO department ?', {name: }
  //       ),
  //         (err, results) => {
  //           if (err) {
  //             reject(err);
  //           }
  //           resolve(results);
  //         };
  //     });
  //   }
}
module.exports = EmployeeDatabase;
