// controllers/book.js
var express = require('express');
var router = express.Router();

var decorateBooks = require('../viewmodels/book');

// Konyvlista oldal
router.get('/list', function(req, res) {
    res.render('books/list');
})
/*
router.get('/list', function (req, res) {
    req.app.models.book.find().then(function (books) {
        res.render('books/list', {
            books: decorateBooks(books),
            messages: req.flash('info')
        });
    });
});*/

// Hiba felvitele
router.get('/new', function(req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('books/new', {
        validationErrors: validationErrors,
        data: data,
    });
})

// Hiba felvitele POST
router.post('/new', function(req, res) {
   // adatok ellenőrzése
    req.checkBody('cim', 'Hibas konyv cim').notEmpty().withMessage('Kotelezo megadni!');
    req.checkBody('iro', 'Hibas iro').notEmpty().withMessage('Kotelezo megadni!');
    req.sanitizeBody('megjegyzes').escape();
    req.checkBody('megjegyzes');
    
    var validationErrors = req.validationErrors(true);
    console.log(validationErrors);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/books/new');
    }
    else {
        req.app.models.book.create({
            status: 'new',
            cim: req.body.cim,
            iro: req.body.iro,
            description: req.body.leiras
        })
        .then(function (book) {
            //siker
            req.flash('info', 'Könyv sikeresen felvéve!');
            res.redirect('/books/list');
        })
        .catch(function (err) {
            //hiba
            console.log(err)
        });
    }
})

module.exports = router;

