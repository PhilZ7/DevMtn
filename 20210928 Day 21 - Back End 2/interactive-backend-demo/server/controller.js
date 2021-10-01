const movies = require('./db.json')
let id = 11;

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const { movieId } = req.params;

        const tgtIndex = movies.findIndex(function(movieObj) {
            return movieObj.id === parseInt(movieId);
        })
    
        if (tgtIndex === -1) {
            res.status(404).send('Movie not found!')
        } else {
            movies.splice(tgtIndex, 1);
            res.status(200).send(movies);
        }
    },
    addMovie: (req, res) => {
        const { title, rating, imageURL } = req.body;

        // const newMovie = {
        //     id: id,
        //     title: title,
        //     rating: rating,
        //     imageURL: imageURL
        // } Same as below when property/variable have same name

        const newMovie = {
            id,
            title,
            rating,
            imageURL
        }

        movies.push(newMovie);
        id++;

        res.status(200).send(movies);},

    updateMovie: (req, res) => {
        const { id } = req.params;
        const { type } = req.body;

        const tgtIndex = movies.findIndex(function(movieObj) {
            return movieObj.id === parseInt(id);
        })

        const tgtMovieObj = movie[tgtIndex];

        if (type === 'plus') {
            if (tgtMovieObj.rating < 5) {
                tgtMovieObj.rating +=1;
            }
        } else if (type === 'minus') {
            if (tgtMovieObj.rating > 1) {
                tgtMovieObj.rating -=1;
            }
        } else {
            res.status(400).send('What did you do!? Something went wrong.')
        }
    }
};