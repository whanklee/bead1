// controllers/book.js
var express = require('express');
var router = express.Router();

var decorateBooks = require('../viewmodels/book');

// Konyvlista oldal

router.get('/list', function (req, res) {
    req.app.models.book.find({user:req.user.id}).then(function (books) {
        res.render('books/list', {
            books: decorateBooks(books),
            messages: req.flash('info')
        });
    });
});

//konyv felvétele
router.get('/new', function(req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('books/new', {
        validationErrors: validationErrors,
        data: data,
    });
})

router.get('/delete/:id', function(req,res){
     var id = req.params.id;
    req.app.models.book.destroy({id: id}).then(function(){
        res.redirect('/books/list');}
    );
});

router.get('/edit/:id', function (req, res) {
    var id = req.params.id;
	req.app.models.book.findOne({id: id}).then(function (books){
		res.render('books/update',{
				books: books,
		});
	});
});

router.post('/edit/:id', function (req, res) {
		
        req.app.models.book.update({id: req.params.id}, {
            iro: req.body.iro,
            cim: req.body.cim,
            description: req.body.leiras
        })
            .exec(function (err,books) {
                res.redirect('/books/list');
            });
});



router.post('/new', function(req, res) { //request, response
    req.checkBody('cim', 'Hibas konyv cim').notEmpty().withMessage('Kötelező megadni!');
    req.checkBody('iro', 'Hibas iro').notEmpty().withMessage('Kötelező megadni!');
    /*req.sanitizeBody('leiras').escape();
    req.checkBody('leiras', 'Hibas megjegyzes');*/
    
    var validationErrors = req.validationErrors(true);
    console.log(validationErrors);
   /* var combobox = document.getElementById("comboBox");
    var stat = combobox.options(stat.selectIndex).value;*/
    
    
    if (validationErrors) {
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/books/new');
    }
    else {
        req.app.models.book.create({
            status: 'new',
            cim: req.body.cim,
            iro: req.body.iro,
            description: req.body.leiras,
            user: req.user.id,
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

