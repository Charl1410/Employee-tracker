const Database = require('./database.js');

class EmployeeDatabase extends Database {
    constructor(info) {
        super(info);
    } 

    getDepartments() {

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
            this.db.query('SELECT'), (err, results) => {
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