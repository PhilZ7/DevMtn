-- Exercises done on postgres.devmountain.com
-- Select Statements

SELECT * FROM album;
SELECT album_id, title FROM album;
SELECT * FROM customer
	WHERE city IN('Paris', 'Rome', 'Dublin')
 ORDER BY city ASC;


-- Aggregate Functions

SELECT COUNT(*) FROM customer;
SELECT AVG(customer_id) FROM customer;
SELECT SUM(customer_id) FROM customer;
SELECT MAX(customer_id) FROM customer;

-- Creating Tables
CREATE TABLE food (
  food_id SERIAL PRIMARY KEY,
  food_name VARCHAR(150),
  price NUMERIC,
  is_good BOOLEAN
);

-- Manipulating Tables
INSERT INTO food (food_name, is_good, price)
	VALUES ('sushi', True, 40),
  ('rotten eggs', False, 9);

UPDATE food
SET price = 30.22 WHERE food_name = 'sushi';
SELECT * FROM food
ORDER BY price;

DELETE FROM food
WHERE food_id = 3;

SELECT * FROM food;

-- EOD Interactive

CREATE TABLE student (
  student)id SERIAL PRIMARY KEY,
  name TEXT,
  age INTEGER NOT NULL,
  fav_thing VARCHAR(60),
  has_been_out_of_country BOOLEAN
);

INSERT INTO student (name, age, fav_thing, has_been_out_of_country)
  VALUES ('sally', 10, 'candy', True);

SELECT name, age FROM student WHERE student_id = 4;
-- Deletes table
DROP TABLE student;

-- Clears table from all values
TRUNCATE student;

