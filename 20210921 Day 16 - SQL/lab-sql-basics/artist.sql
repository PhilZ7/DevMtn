-- INSERT INTO artist (name)
--     VALUES ('James Jensen'),
--     ('Jensen James'),
--     ('Phil Meca');

SELECT * FROM artist;

SELECT * FROM artist 
    ORDER BY name DESC LIMIT 10;

SELECT * FROM artist 
    ORDER BY name ASC LIMIT 5;

-- Searching for "starts with Black"
SELECT * FROM artist 
    WHERE name LIKE 'Black%';

-- Searching for "contains Black"
SELECT * FROM artist 
    WHERE name LIKE '%Black%';