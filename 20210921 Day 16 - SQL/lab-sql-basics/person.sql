CREATE TABLE person (
    person_id SERIAL PRIMARY KEY,
    person_name VARCHAR (40),
    person_age INT,
    person_height FLOAT (5),
    person_city VARCHAR (50),
    favorite_color VARCHAR (30)
    );

INSERT INTO person (person_name, person_age, person_height, person_city, favorite_color)
    VALUES ('John', 30, 170, 'Dallas', 'Red'),
    ('James', 19, 155, 'Chicago', 'Black'),
    ('Jensen', 45, 162, 'Rockwall', 'Blue'),
    ('Jonah', 65, 198, 'Irving', 'Yellow'),
    ('Jannet', 89, 175, 'New York', 'Green');


-- Selecting shortest to tallest
SELECT * FROM person
    ORDER BY person_height ASC;

-- Selecting from age
SELECT * FROM person
	WHERE person_age > 20;

SELECT * FROM person
	WHERE person_age = 18;

SELECT * FROM person
	WHERE favorite_color = 'Orange' OR favorite_color = 'Green';

SELECT * FROM person
WHERE favorite_color IN ('Orange', 'Green', 'Blue');

SELECT * FROM person
WHERE favorite_color IN ('Yellow', 'Purple');