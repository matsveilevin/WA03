"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var express = require('express');

var bodyParser = require('body-parser');

var crypto = require('crypto');

var uuidv4 = require('uuid/v4');

"use strict";

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); //app.use(bodyParser.urlencoded({ extended: false }))

var User = function User(name, pass, email) {
  _classCallCheck(this, User);

  this.id = uuidv4();
  this.name = name;
  this.pass = pass;
  this.email = email;
};

var users = [];
users.push(new User('Alex', crypto.createHash('md5').update('MyStRoNgPaSsWoRd2019!').digest("hex"), 'test1@leverx.com'));
users.push(new User('John', crypto.createHash('md5').update('MyStRoNgPaSsWoRd2018!').digest("hex"), 'test2@leverx.com'));
users.push(new User('Jane', crypto.createHash('md5').update('MyStRoNgPaSsWoRd2017!').digest("hex"), 'test3@leverx.com'));
app.get('/Users/:id', function (req, res) {
  var userId = req.params.id;
  var user = users.find(function (user) {
    return user.id == userId;
  });
  res.send(user);
});
app.get('/Users', function (req, res) {
  res.send(JSON.stringify(users));
});
app.post('/Users/', function (req, res) {
  console.log(req.body);
  users.push(new User(req.body.name, req.body.pass, req.body.email));
  res.send(JSON.stringify(users[users.length - 1]));
});
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(666, function () {
  console.log('Example app listening on port 666!');
});
var m = 666;
//# sourceMappingURL=es5.js.map
