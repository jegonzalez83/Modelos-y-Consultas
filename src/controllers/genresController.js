//crear controlador de genres 
const db = require('../database/models');

module.exports = {
    list: function (req, res) {
        db.Genre.findAll()
        .then((genres) => {
            res.render('genresList', {
                genres
            })
        })
        .catch(error => res.send(error))
    },
    detail: function (req, res) {
        db.Genre.findByPk(req.params.id)
        .then((genre) => {
            res.render('genresDetail', {
                genre
            })
        })
        .catch(error => res.send(error))
    },

}