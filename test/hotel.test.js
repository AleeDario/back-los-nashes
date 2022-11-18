const app = require('../app');
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('GET /api/hotels/', function (done) {
    it('Return an error when the filter does not find a hotel', function (done) {
        request(app)
            .get(`/hotels/3456789olgfdsdrt`)
            .expect(404)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
})