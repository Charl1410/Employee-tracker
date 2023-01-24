INSERT INTO department (id, name) VALUES (1, 'Sales');
INSERT INTO department (id, name) VALUES (2, 'Engineering');
INSERT INTO department (id, name) VALUES (3, 'Finance');
INSERT INTO department (id, name) VALUES (4, 'Legal');

INSERT INTO role (id, title, salary, department_id) VALUES (1, 'Sales Lead', 100000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (2, 'Salesperson', 80000, 1);
INSERT INTO role (id, title, salary, department_id) VALUES (3, 'Lead Engineer', 200000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (4, 'Software Engineer', 180000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (5, 'Accountant', 150000, 3);
INSERT INTO role (id, title, salary, department_id) VALUES (6, 'Legal Team Lead', 200000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (7, 'Lawyer', 180000, 4);
INSERT INTO role (id, title, salary, department_id) VALUES (8, 'Janitor', 50000, 2);
INSERT INTO role (id, title, salary, department_id) VALUES (9, 'Receptionist', 70000, 4);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (1, 'Charlotte', 'Griffin', 1, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (2, 'Jordan', 'Gibbs', 2, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (3, 'Jason', 'Sammon', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (4, 'Ellesse', 'Donaldson', 8, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (5, 'Chris', 'Bradshaw', 9 NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (6, 'Sam', 'Brown', 7, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (7, 'Liz', 'Griffin', 3, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (8, 'Henry', 'Phillips', 4, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (9, 'Bailey', 'Gibbs', 6, NULL);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (10, 'Mohamed', 'Elmi', 5, NULL);





