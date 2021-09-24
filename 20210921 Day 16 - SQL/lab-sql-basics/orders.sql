CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    person_id INT,
    product_name VARCHAR (100),
    product_price FLOAT (10),
    quantity NUMERIC
);

INSERT INTO orders (person_id, product_name, product_price, quantity)
    VALUES (12, 'tacos', 2.49, 20),
    (3, 'pizza', 9.99, 2),
    (3, 'pizza', 4.49, 5),
    (7, 'tacos', 2.49, 10),
    (21, 'tacos', 2.49, 4)
;

-- Total number of products ordered
SELECT SUM(quantity) FROM orders;

-- Calculating total orders with quantities, then added person ID
SELECT SUM(product_price*quantity)
    AS Total_Value FROM orders WHERE person_id = 12;