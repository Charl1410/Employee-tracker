const AddDepartmentQuestions = [
    {
        type: "input",
        name: "name",
        message: "What's the name of your department?",
    }
    
];

const roleQuestion = [
    {
        type: 'input',
        name: 'role_title',
        message: 'What is the name of the role?',
    },
    {
        type: 'input',
        name: 'role_salary',
        message: 'What is the salary for the role?',
    },
    {
        type: 'list',
        name: 'departyment_id',
        message: 'What department does this role belong to?',
        choices: []
    }
]

const employeeQuestions = [
    { 
    type: 'input',
    name: 'first_name',
    message: 'What is the first name of your employee?'
    },
    { 
    type: 'input',
    name: 'last_name',
    message: 'What is the last name of your employee?'
    },

    { 
    type: 'list',
    name: 'role_id',
    message: 'What is the role id for your employee?',
    choices: []
        },

    { 
    type: 'input',
    name: 'manager_id',
    message: 'Who is the manager for that employee??',
    choices: []

    },
        
    
    
    

    
]







module.exports = {AddDepartmentQuestions, departmentQuestions}