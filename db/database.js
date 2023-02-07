// require the npm mysql2
const mysql = require('mysql2');

// Create a class that will connect to db
class initialiseDatabase {
    constructor (info) {
        this.info = info
        this.db = null
    }
// Check to make sure the details are correct
    validate() {

        const { host, user, password, database} = this.info;
        if ( !host || !user || !password || !database )
        throw new Error('Database details are wrong');

        return;
    }
// 
    connect() {

        this.validate();

        const { host, user, password, database} = this.info;

        this.db = mysql.createConnection(
            {
              host: host,
              user: user,
              password: password,
              database: database
            },
            console.log(`\x1b[43mConnected to the employee_db database.`)
          );
    }

}

module.exports = initialiseDatabase;