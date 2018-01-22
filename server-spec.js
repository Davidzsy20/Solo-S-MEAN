var test    = require('tape');
var request = require('supertest');
var app     = require('./server.js');
var router = require('./routes.js');
// This is an example test. Use it to write your own endpoint tests below.
test('GET /zen', function (assert) {
  request(app)
    .get('/zen')
    .expect(200)
    .end(function(err, response) {
      assert.error(err);
      assert.equal(response.body,
        'There are no accidents. - Master Oogway',
        "The server should respond with a quote");
      assert.end();
    });
});

// TODO: YOUR TESTS HERE
test('POST /goal',function (assert) {
  request(router)
  .post('/goal')
  .expect(200)
  .end(function(err, res) {
    assert.error(err);
    assert.equal(res.body,
    'There are no accidents.',
  "The server should response with a quate");
  assert.end();
  });
})
