CREATE TABLE food (
  food_id SERIAL PRIMARY KEY,
  food_name VARCHAR,
  quantity INT,
  price FLOAT,
  is_good BOOLEAN
  );
	
  INSERT INTO food (food_name, quantity, price)
  	VALUES ('pizza', 2, 4.99),
    ('tacos', 13, 1.99),
    ('steak', 3, 9.99);

-- ILIKE makes it case insensitive
SELECT * FROM food
	WHERE food_name ILIKE '%Z%';

SELECT * FROM food
	WHERE food_name NOT ILIKE '%k%';

-- Changing food_id from pizza to rice
UPDATE food
  SET food_name = 'rice'
  WHERE food_id = 1;
  
SELECT * FROM food

-- Deleting table
DROP TABLE food