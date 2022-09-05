const db = require('../database/models');

module.exports = {
    list:(req, res)=>{
        db.Movie.findAll()
        .then((movies)=>{
            res.render('moviesList', {
                movies
            })
        })
        .catch(error => res.send(error))
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
        })
        .then((movies) => {
            res.render('newestMovies', {
                movies
            })
        })
    },
    recomended: (req, res) => {
        db.Movie.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5,
        })
        .then((movies) => {
            res.render('recommendedMovies', {
                movies
            })
        }).catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
        .then((movie) => {
            res.render('moviesDetail', {
                movie
            })
        }).catch(error => res.send(error))
    },
}