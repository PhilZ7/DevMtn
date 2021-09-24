employee
email
VARCHAR (60)
employee_id
INTEGER
last_name
VARCHAR (20)
first_name
VARCHAR (20)
title
VARCHAR (30)
reports_to
INTEGER
birth_date
TIMESTAMP
hire_date
TIMESTAMP
address
VARCHAR (70)
city
VARCHAR (40)
state
VARCHAR (40)
country
VARCHAR (40)
postal_code
VARCHAR (10)
phone
VARCHAR (24)
fax
VARCHAR (24)

SELECT * FROM employee 
    WHERE city ('Calgary');

-- Youngest employee
SELECT MAX(birth_date) as youngest_employee
	FROM employee;

-- Oldest employee
SELECT MIN(birth_date) as oldest_employee
	FROM employee;

-- Reports to Nancy
SELECT * FROM employee
	WHERE reports_to = 2;

SELECT * FROM employee
	WHERE city = 'Lethbridge';