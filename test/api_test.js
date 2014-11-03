
'use strict';
var chai = require('chai');
var chaihttp = require('chai-http');
var moment = require('moment');
var server = require('../server');

chai.use(chaihttp);

//With help from th following:
//Paul Laskowski - Code Fellows JS &
//http://devcenter.wercker.com/articles/languages
//     /nodejs/getting-started-express-and-mocha.html
//Although the site above uses 'supertest', it got me on the right path

describe('Simple JSON API', function() {
  it('should send the local time', function(done) {
    chai.request(server)
    .get('/')
    .end(function(err,res){
      chai.expect('Content-Type', /json/);
      chai.expect(res.body).to.equal(moment().format('MMMM Do YYYY, h:mm'));
      done();
    });
  });

  it('should greet someone', function(done) {
    chai.request(server)
    .get('/Zaphod')
    .end(function(err,res){
      chai.expect('Content-Type', /json/);
      chai.expect(res.body.msg).to.equal('Hello Zaphod!');
      done();
    });
  });

});
