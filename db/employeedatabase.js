const Database = require('./database.js');

class EmployeeDatabase extends Database {
    constructor(info) {
        super(info);
    } 

    getDepartments() {

        //selecting all the data from the department database and will be passed into the view departments function in index.js
        return new Promise((resolve, reject) => {
            this.db.query('SELECT * FROM department'), (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            }
        });
    }

    getRoles() {

        return new Promise((resolve, reject) => {
            this.db.query('SELECT role.id role.title role.salary department.name AS department_name FROM department INNER JOIN role ON role.deparment_id = department.id'), (err, results) => {
                if (err) {
                    reject(err);
                }
                resolve(results);
            }
        });
    }








}

module.exports = EmployeeDatabase


// function getDepartments() {

// }

// module.exports = getDepartments