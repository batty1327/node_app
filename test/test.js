var request = require('supertest');
var app = require('../index.js');describe('GET /', function() {
 it('respond with Hello World', function(done) { //navigate to root and check t>
 request(app).get('/').expect('Hello World', done);
 });
});
