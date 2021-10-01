SELECT t.name, a.title
FROM track AS t
JOIN album AS a 
ON t.album_id = a.album_id;

SELECT t.name, a.title, g.name
FROM track AS t
JOIN album AS a 
ON t.album_id = a.album_id
JOIN genre AS g
ON g.genre_id = t.genre_id;