const mysql = require('mysql2');

class Database {
    constructor(options)  {
        this.options = options
        this.db = null
    }

    validate() {
        const {host, user, password, database } = this.options;
        if (!host || !user || !password ||!database)
        throw new Error('database configuration is invalid');
        return;
    }

    connect ()  {

        this.validate();

        const {host, user, password, database} = this.options;
    }
}