-- JOIN --

-- Get all invoices where the unit_price on the invoice_line is greater than $0.99.
SELECT * FROM invoice_line
WHERE unit_price > 0.99;

--Get the invoice_date, customer first_name and last_name, and total from all invoices.
SELECT i.invoice_date, c.first_name, c.last_name, i.total
FROM invoice i
JOIN customer c ON i.customer_id = c.customer_id;

--Get the customer first_name and last_name and the support rep’s first_name and last_name from all customers.
--Support reps are on the employee table.
SELECT c.first_name, c.last_name, e.first_name, e.last_name
FROM customer c
JOIN employee e ON c.support_rep_id = e.employee_id;

--Get the album title and the artist name from all albums.
SELECT al.title, ar.name
FROM album al
JOIN artist ar ON al.artist_id = ar.artist_id;

--Get all playlist_track track_ids where the playlist name is Music.
SELECT pt.track_id
FROM playlist_track pt
JOIN playlist pl ON pl.playlist_id = pt.playlist_id
WHERE pl.name = 'Music';

--Get all track name`s for `playlist_id.
SELECT t.name
FROM track t
JOIN playlist p ON t.track_id = p.playlist_id
;

--Get all track name`s and the playlist `name that they’re on ( 2 joins ).
SELECT t.name, p.name
FROM track t
JOIN playlist_track pt ON pt.track_id = t.track_id
JOIN playlist p ON pt.playlist_id = p.playlist_id;

--Get all track name`s and album `title`s that are the genre `Alternative & Punk ( 2 joins ).
SELECT t.name, a.title
FROM track t
JOIN album a ON t.album_id = a.album_id
JOIN genre g ON g.genre_id = t.genre_id 
WHERE g.name = 'Alternative & Punk';

-- SUBQUERIES --

--Get all invoices where the unit_price on the invoice_line is greater than $0.99
SELECT * FROM invoice
WHERE invoice_id IN
(SELECT invoice_id FROM invoice_line WHERE unit_price > 0.99);

--Get all playlist tracks where the playlist name is Music.
SELECT * FROM playlist_track
WHERE playlist_id IN (
  SELECT playlist_id FROM playlist WHERE name = 'Music');

--Get all track names for playlist_id 5.
SELECT * FROM track
WHERE track_id IN (
  SELECT track_id FROM playlist_track WHERE playlist_id = 5);

--Get all tracks where the genre is Comedy
SELECT * FROM track
WHERE genre_id IN (
  SELECT genre_id FROM genre WHERE name = 'Comedy');

--Get all tracks where the album is Fireball
SELECT * FROM track
WHERE album_id IN (
  SELECT album_id FROM album WHERE name = 'Fireball');

--Get all tracks for the artist Queen (2 nested subqueries)
SELECT * FROM track
WHERE album_id IN (
  SELECT album_id FROM album WHERE artist_id IN (
  SELECT artist_id FROM artist WHERE name LIKE 'Queen')
);

--Craete a view called rock that selects all the tracks where the genre ir Rock
CREATE VIEW rock_genre AS
SELECT * FROM track
WHERE genre_id IN (
  SELECT genre_id FROM genre WHERE name = 'Rock');

--Create a view called classical_count that gets a count of all the tracks from the playlist called Classical.
CREATE VIEW classical_count AS
SELECT COUNT(*) FROM track
WHERE genre_id IN (
  SELECT genre_id FROM genre WHERE name = 'Classical');

SELECT * from classical_count;

--Find all customers with fax numbers and set those numbers to null.
UPDATE customer
SET fax = NULL;

--Find all customers with no company (null) and set their company to “Self”.
UPDATE customer
SET company = 'Self'
WHERE company IS NULL;

--Find the customer Julia Barnett and change her last name to Thompson.
UPDATE customer
SET last_name = 'Thompson'
WHERE customer_id = 28;

--Find the customer with this email luisrojas@yahoo.cl and change his support rep to 4.
UPDATE customer
SET support_rep_id = 4
WHERE email = 'luisrojas@yahoo.cl';

--Find all tracks that are the genre Metal and have no composer. Set the composer to “The darkness around us”.
UPDATE track
SET composer = 'The darkness around us'
WHERE genre_id = 3 AND composer IS NULL;


-- CREATED TABLE -- 

CREATE TABLE animals (
id SERIAL PRIMARY KEY, name VARCHAR(50), type TEXT, age INTEGER

);

INSERT INTO animals ( name, type, age ) VALUES ('Leo','lion', 12), ('Jerry', 'mouse', 4), ('Marty', 'zebra', 10), ('Gloria', 'hippo', 8), ('Alex', 'lion', 9), ('Melman', 'giraffe', 15), ('Nala', 'lion', 2), ('Marie', 'cat', 1), ('Flounder', 'fish', 8);
SELECT * FROM animals;

--Delete all ‘lion’ entries from the table.
DELETE FROM animals
WHERE type LIKE 'lion';

--Delete all animals whose names start with “M”.
DELETE FROM animals
WHERE name LIKE 'M%';

--Delete all entries whose age is less than 9.
DELETE FROM animals
WHERE age < 9;



