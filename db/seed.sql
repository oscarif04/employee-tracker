use employees;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Justin', 'Herbert', 1, NULL),
    ('Philip', 'Rivers', 2, 1),
    ('Oscar', 'Flores', 3, NULL),
    ('Athena', 'Flores', 4, 3),
    ('Sebastian', 'Magana', 5, NULL),
    ('Patricia', 'Magana', 6, 5),
    ('Alex', 'Martinez', 7, NULL),
    ('Tony', 'Klarcson', 8, 7);