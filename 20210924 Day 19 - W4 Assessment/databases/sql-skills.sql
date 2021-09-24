-- Artist Table --

INSERT INTO artist (name)
VALUES ('Phil Meca'),
('Eric The Seller'),
('Jeddy The Jedi');
--

SELECT * FROM artist 
ORDER BY name ASC LIMIT 5;
--
-- Employee Table --

SELECT first_name, last_name, city FROM employee
WHERE city = 'Calgary';
--

SELECT * FROM employee
WHERE reports_to = 2;
--

SELECT COUNT (*) FROM employee
WHERE city = 'Lethbridge';
--
-- Invoice Table --

SELECT COUNT (*) FROM invoice
WHERE billing_country = 'USA';
--

SELECT total FROM invoice
ORDER BY total DESC LIMIT 1;
--

SELECT total FROM invoice
ORDER BY total ASC LIMIT 1;
--

SELECT total FROM invoice
WHERE total > 5;
--

SELECT COUNT (total) FROM invoice
WHERE total < 5;
--

SELECT SUM (total) FROM invoice;
--
-- Join Queries (Various Tables)

SELECT i.invoice_id, ii.unit_price, i.total
FROM invoice i
JOIN invoice_line ii ON ii.invoice_id = i.invoice_id
WHERE ii.unit_price > 0.99;
--

SELECT i.invoice_date, c.first_name, c.last_name, i.total
FROM invoice i
JOIN customer c ON i.customer_id = c.customer_id;
--

SELECT c.first_name AS customer_f_name, c.last_name, e.first_name AS employee_f_name, e.last_name
FROM customer c
JOIN employee e ON c.support_rep_id = e.employee_id;

-- 

SELECT a.title, ar.name
FROM album a
JOIN artist ar ON a.artist_id = ar.artist_id;
--

--- --- --- EXTRA CREDIT SQL --- --- ---
-- Artist Table

SELECT name FROM artist
ORDER BY name DESC LIMIT 10;
--

SELECT name FROM artist
WHERE name LIKE 'Black%';
--

SELECT name FROM artist
WHERE name LIKE '%Black%';
--
-- Employee Table

SELECT first_name, birth_date FROM employee
ORDER BY birth_date DESC LIMIT 1;
--

SELECT first_name, birth_date FROM employee
ORDER BY birth_date ASC LIMIT 1;
--
-- Invoice Table

SELECT COUNT (*) FROM invoice
WHERE invoice_id IN (
  SELECT invoice_id FROM invoice
  WHERE billing_state LIKE 'CA' OR
  billing_state LIKE'TX' OR
  billing_state LIKE'AZ');
--

SELECT AVG(total) FROM invoice;
--
-- More Join Queries

SELECT pt.track_id, p.name 
FROM playlist_track pt
JOIN playlist p ON p.playlist_id = pt.playlist_id
WHERE p.name LIKE 'Music';
--

SELECT t.name, pt.playlist_id 
FROM track t
JOIN playlist_track pt ON pt.track_id = t.track_id
WHERE pt.playlist_id = 5;
--

SELECT t.name, p.name
FROM track t
JOIN playlist_track pt ON pt.track_id = t.track_id
JOIN playlist p ON pt.playlist_id = p.playlist_id;
--

SELECT t.name, a.title
FROM track t
JOIN album a ON t.album_id = a.album_id
JOIN genre g ON g.genre_id = t.genre_id 
WHERE g.name = 'Alternative & Punk';
--






