var express = require('express');
var router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const { render } = require('../app');
const punkAPI = new PunkAPIWrapper()

router.get('/beers', function (req, res, next) {

    punkAPI
        .getBeers()
        .then((beersFromApi) => {
            res.render('beers.hbs', { beersFromApi })
        })
        .catch((error) => console.log(error))

});

router.get('/randomBeer', function (req, res, next) {

    punkAPI
        .getRandom()
        .then((randomBeer) => {
            res.render('randomBeer.hbs', { randomBeer })
        })
        .catch((error) => console.log(error))


});

module.exports = router;
