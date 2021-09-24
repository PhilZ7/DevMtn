create table eras (
    era_id serial primary key, 
    name varchar(75)
);

create table painters (
    painter_id serial primary key, 
    name varchar(100), 
    era_id integer references eras(era_id)
);

create table artworks (
    artwork_id serial primary key, 
    name varchar(250), 
    year integer, 
    painter_id integer references painters(painter_id)
);

insert into eras (name) 
values ('Italian Renaissance'), 
('Realism'), 
('Impressionism'), 
('Cubism'), 
('Pop Art');

insert into painters (name, era_id) 
values ('da Vinci', 1),
('Michelangelo', 1), 
('Raphael', 1), 
('Donatello', 1), 
('Millet', 2), 
('Whistler', 2), 
('Monet', 3), 
('Renoir', 3), 
('Cassatt', 3), 
('Picasso', 4), 
('Braque', 4), 
('Gleizes', 4), 
('Warhol', 5), 
('Lichtenstein', 5);

insert into artworks (name, year, painter_id) 
values ('Lady with an Ermine', 1490, 11),
('Mona Lisa', 1504, 1),
('The Last Supper', 1498, 1),
('Statue of David', 1504, 2),
('Sistine Chapel Ceiling', 1512, 2),
('The Schools of Athens', 1512, 3),
('Saint George and the Dragn', 1505, 3),
('The Fire in the Borgo', 1514, 3),
('Statue of St. George', 1415, 4),
('The Gleaners', 1857, 5),
('The Sower', 1850, 5),
('The Sheepfold', 1860, 5),
('Nocturne: Black and Gold - Old Battersea Bridge', 1875, 6),
('Impression, Sunrise', 1874, 7),
('Water Lillies', 1919, 7),
('The Studio Boat', 1876, 7),
('The Swing', 1876, 8),
('Tea', 1881, 9),
('Summertime', 1894, 9),
('Lilacs in a Window', 1879, 9),
('Young Mother Sewing', 1900, 9),
('Woman with Mustard Pot', 1910, 10),
('Girl with a Mandolin', 1910, 10),
('The Poet', 1911, 10),
('Fruit Dish', 1908, 11),
('Man on a Balcony', 1912, 12),
('Football Players', 1913, 12),
('Campbells Soup', 1968, 13),
('Whaam!', 1963, 14),
('Girl in Mirror', 1964, 14),
('Masterpiece', 4962, 14),
('Look Mickey', 1961, 14);

-- UPDATING TABLE --
UPDATE artworks
SET name = 'Saint George and the Dragon'
WHERE artwork_id = 7;

SELECT * FROM artworks;

-- -- --
UPDATE artworks
SET year = 1962
WHERE artwork_id = 31;

SELECT * FROM artworks;

-- JOINING TABLES & ALIAS -- 
SELECT p.name, e.name 
FROM painters p
JOIN eras e ON p.era_id = e.era_id;

-- -- -- 
SELECT p.name AS painter, e.name AS era
FROM painters p
JOIN eras e ON p.era_id = e.era_id;

-- -- -- 
SELECT a.name AS art, a.year, p.name AS painter
FROM artworks a
JOIN painters p ON a.artwork_id = p.painter_id;

-- -- -- 
SELECT a.name AS artwork, a.year, p.name AS painter
FROM artworks a
JOIN painters p ON a.painter_id = p.painter_id
WHERE a.year > 1600
ORDER BY a.year ASC;

-- -- -- 
SELECT a.name AS artwork, a.year, p.name AS painter, eras.name AS era
FROM artworks AS a
JOIN painters AS p
ON p.painter_id = a.painter_id 
JOIN eras ON p.era_id = eras.era_id;

-- CREATING VIEW, DOES NOT RETURN VALUE BUT SAVES SEARCH --
CREATE VIEW all_info AS

SELECT a.name AS artwork, a.year, p.name AS painter, eras.name AS era
FROM artworks AS a
JOIN painters AS p
ON p.painter_id = a.painter_id 
JOIN eras ON p.era_id = eras.era_id;

-- RUNNING VIEW ABOVE --
SELECT * FROM all_info

-- FURTHER VIEW USAGE --
SELECT * FROM all_info
WHERE year < 1900
ORDER BY year DESC;

-- SUBQUERIES --
SELECT * FROM painters
WHERE era_id IN (
  SELECT era_id FROM eras WHERE name = 'Cubism');

-- -- -- 
SELECT name, year FROM artworks
WHERE painter_id IN (
  SELECT painter_id FROM painters
  WHERE name LIKE 'M%');

-- -- -- 
SELECT name, year FROM artworks
WHERE painter_id IN (
  SELECT painter_id FROM painters
  WHERE name LIKE 'M%')
  AND year > 1600;

-- DELETING ROW --
DELETE FROM painters
WHERE painter_id = 9; -- WILL RETURN ERROR AS TABLES ARE JOINED THROUGH FOREIGH KEY --

-- -- --
SELECT * FROM artworks;
WHERE painter_id = 9;

-- DELETING SUBQUERY --
DELETE FROM artworks
WHERE painter_id IN (
  SELECT painter_id FROM painters
  WHERE era_id IN (
   SELECT era_id FROM eras
  	WHERE name LIKE 'I%'
  )
);