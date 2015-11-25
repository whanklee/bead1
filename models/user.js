
var bcrypt = require('bcryptjs');

module.exports = {
    identity: 'user',
    connection: 'default',
    attributes: {
        felhasznalonev: {
            type: 'string',
            required: true,
            unique: true,
        },
        password: {
            type: 'string',
            required: true,
        },
        surname: {
            type: 'string',
            required: true,
        },
        forename: {
            type: 'string',
            required: true,
        },
        avatar: {
            type: 'string',
            url: true,
        },
        role: {
            type: 'string',
            enum: ['riporter', 'operator'],
            required: true,
            defaultsTo: 'riporter'
        },
        
        books: {
            collection: 'book',
            via: 'user'
        },
        
        //validPassword: function (password) {
        //    return password === this.password;
        //}
        validPassword: function (password) {
            return bcrypt.compareSync(password, this.password);
        }

    },
    
    beforeCreate: function(values, next) {
        bcrypt.hash(values.password, 10, function(err, hash) {
            if (err) {
                return next(err);
            }
            values.password = hash;
            next();
        });
    }

};

