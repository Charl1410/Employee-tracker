const addDepartmentQuestions = [
    {
        type: "input",
        name: "name",
        message: "What's the name of your department?",
    }
    
];

const roleQuestions = [
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

const updateEmployeeRoleQuestions = [
    
        {
            type: 'list',
            name: 'employee_id',
            message: 'Which Employee\'s Role do you want to Update?',
            choices: [],
          },
          {
            type: 'list',
            name: 'role_id',
            message: 'Which Role do you want to assign to the selected Employee?',
            choices: [],
          },
    
]





module.exports = {addDepartmentQuestions, roleQuestion, departmentQuestions, employeeQuestions, updateEmployeeRoleQuestions}