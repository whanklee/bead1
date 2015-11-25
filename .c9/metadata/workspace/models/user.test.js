{"filter":false,"title":"user.test.js","tooltip":"/models/user.test.js","undoManager":{"mark":39,"position":39,"stack":[[{"start":{"row":0,"column":0},"end":{"row":89,"column":0},"action":"insert","lines":["","var expect = require(\"chai\").expect;","var bcrypt = require('bcryptjs');","","var Waterline = require('waterline');","var waterlineConfig = require('../config/waterline');","var userCollection = require('./user');","var errorCollection = require('./error');","","var User;","","before(function (done) {","    // ORM indítása","    var orm = new Waterline();","","    orm.loadCollection(Waterline.Collection.extend(userCollection));","    orm.loadCollection(Waterline.Collection.extend(errorCollection));","    waterlineConfig.connections.default.adapter = 'memory';","","    orm.initialize(waterlineConfig, function(err, models) {","        if(err) throw err;","        User = models.collections.user;","        done();","    });","});","","describe('UserModel', function () {","","    function getUserData() {","        return {","            neptun: 'abcdef',","            password: 'jelszo',","            surname: 'Gipsz',","            forename: 'Jakab',","            avatar: '',","        };","    }","","    beforeEach(function (done) {","        User.destroy({}, function (err) {","            done();","        });","    });","    ","    it('should be able to create a user', function () {","        return User.create({","                neptun: 'abcdef',","                password: 'jelszo',","                surname: 'Gipsz',","                forename: 'Jakab',","                avatar: '',","        })","        .then(function (user) {","            expect(user.neptun).to.equal('abcdef');","            expect(bcrypt.compareSync('jelszo', user.password)).to.be.true;","            expect(user.surname).to.equal('Gipsz');","            expect(user.forename).to.equal('Jakab');","            expect(user.avatar).to.equal('');","        });","    });","","    it('should be able to find a user', function() {","        return User.create(getUserData())","        .then(function(user) {","            return User.findOneByNeptun(user.neptun);","        })","        .then(function (user) {","            expect(user.neptun).to.equal('abcdef');","            expect(bcrypt.compareSync('jelszo', user.password)).to.be.true;","            expect(user.surname).to.equal('Gipsz');","            expect(user.forename).to.equal('Jakab');","            expect(user.avatar).to.equal('');","        });","    });","","    describe('#validPassword', function() {","        it('should return true with right password', function() {","             return User.create(getUserData()).then(function(user) {","                 expect(user.validPassword('jelszo')).to.be.true;","             })","        });","        it('should return false with wrong password', function() {","             return User.create(getUserData()).then(function(user) {","                 expect(user.validPassword('titkos')).to.be.false;","             })","        });","    });","","});",""],"id":1}],[{"start":{"row":64,"column":45},"end":{"row":64,"column":51},"action":"remove","lines":["neptun"],"id":2},{"start":{"row":64,"column":45},"end":{"row":64,"column":46},"action":"insert","lines":["f"]}],[{"start":{"row":64,"column":46},"end":{"row":64,"column":47},"action":"insert","lines":["e"],"id":3}],[{"start":{"row":64,"column":47},"end":{"row":64,"column":48},"action":"insert","lines":["l"],"id":4}],[{"start":{"row":64,"column":48},"end":{"row":64,"column":49},"action":"insert","lines":["a"],"id":5}],[{"start":{"row":64,"column":48},"end":{"row":64,"column":49},"action":"remove","lines":["a"],"id":6}],[{"start":{"row":64,"column":48},"end":{"row":64,"column":49},"action":"insert","lines":["h"],"id":7}],[{"start":{"row":64,"column":49},"end":{"row":64,"column":50},"action":"insert","lines":["a"],"id":8}],[{"start":{"row":64,"column":50},"end":{"row":64,"column":51},"action":"insert","lines":["s"],"id":9}],[{"start":{"row":64,"column":51},"end":{"row":64,"column":52},"action":"insert","lines":["z"],"id":10}],[{"start":{"row":64,"column":52},"end":{"row":64,"column":53},"action":"insert","lines":["n"],"id":11}],[{"start":{"row":64,"column":53},"end":{"row":64,"column":54},"action":"insert","lines":["a"],"id":12}],[{"start":{"row":64,"column":54},"end":{"row":64,"column":55},"action":"insert","lines":["l"],"id":13}],[{"start":{"row":64,"column":55},"end":{"row":64,"column":56},"action":"insert","lines":["o"],"id":14}],[{"start":{"row":64,"column":56},"end":{"row":64,"column":57},"action":"insert","lines":["n"],"id":15}],[{"start":{"row":64,"column":57},"end":{"row":64,"column":58},"action":"insert","lines":["e"],"id":16}],[{"start":{"row":64,"column":58},"end":{"row":64,"column":59},"action":"insert","lines":["c"],"id":17}],[{"start":{"row":64,"column":58},"end":{"row":64,"column":59},"action":"remove","lines":["c"],"id":18}],[{"start":{"row":64,"column":58},"end":{"row":64,"column":59},"action":"insert","lines":["v"],"id":19}],[{"start":{"row":67,"column":24},"end":{"row":67,"column":30},"action":"remove","lines":["neptun"],"id":20},{"start":{"row":67,"column":24},"end":{"row":67,"column":25},"action":"insert","lines":["f"]}],[{"start":{"row":67,"column":25},"end":{"row":67,"column":26},"action":"insert","lines":["e"],"id":21}],[{"start":{"row":67,"column":26},"end":{"row":67,"column":27},"action":"insert","lines":["l"],"id":22}],[{"start":{"row":67,"column":24},"end":{"row":67,"column":27},"action":"remove","lines":["fel"],"id":23},{"start":{"row":67,"column":24},"end":{"row":67,"column":38},"action":"insert","lines":["felhasznalonev"]}],[{"start":{"row":30,"column":12},"end":{"row":30,"column":18},"action":"remove","lines":["neptun"],"id":24},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["f"]}],[{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":["e"],"id":25}],[{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":["l"],"id":26}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":["h"],"id":27}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["a"],"id":28}],[{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["s"],"id":29}],[{"start":{"row":30,"column":12},"end":{"row":30,"column":18},"action":"remove","lines":["felhas"],"id":30},{"start":{"row":30,"column":12},"end":{"row":30,"column":26},"action":"insert","lines":["felhasznalonev"]}],[{"start":{"row":46,"column":16},"end":{"row":46,"column":22},"action":"remove","lines":["neptun"],"id":31},{"start":{"row":46,"column":16},"end":{"row":46,"column":17},"action":"insert","lines":["f"]}],[{"start":{"row":46,"column":17},"end":{"row":46,"column":18},"action":"insert","lines":["e"],"id":32}],[{"start":{"row":46,"column":18},"end":{"row":46,"column":19},"action":"insert","lines":["l"],"id":33}],[{"start":{"row":46,"column":19},"end":{"row":46,"column":20},"action":"insert","lines":["h"],"id":34}],[{"start":{"row":46,"column":20},"end":{"row":46,"column":21},"action":"insert","lines":["a"],"id":35}],[{"start":{"row":46,"column":16},"end":{"row":46,"column":21},"action":"remove","lines":["felha"],"id":36},{"start":{"row":46,"column":16},"end":{"row":46,"column":30},"action":"insert","lines":["felhasznalonev"]}],[{"start":{"row":53,"column":24},"end":{"row":53,"column":30},"action":"remove","lines":["neptun"],"id":37},{"start":{"row":53,"column":24},"end":{"row":53,"column":25},"action":"insert","lines":["f"]}],[{"start":{"row":53,"column":25},"end":{"row":53,"column":26},"action":"insert","lines":["e"],"id":38}],[{"start":{"row":53,"column":26},"end":{"row":53,"column":27},"action":"insert","lines":["l"],"id":39}],[{"start":{"row":53,"column":24},"end":{"row":53,"column":27},"action":"remove","lines":["fel"],"id":40},{"start":{"row":53,"column":24},"end":{"row":53,"column":38},"action":"insert","lines":["felhasznalonev"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":64,"column":33},"end":{"row":64,"column":39},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1446204068000,"hash":"d90f4641cff7722d406d972ee8bdc63d08a4186b"}