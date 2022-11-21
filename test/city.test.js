const app = require('../app');
const chai = require('chai')
const assert = chai.assert
const request = require('supertest')

describe('Cities', function (done) {
    it('Must return an array of objects', function (done) {
        request(app)
            .get(`/api/cities/`)
            .expect(res => {
                assert.isArray(res.body.data)
                res.body.data.forEach(city => {
                    assert.isObject(city)
                })
            })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
    it('verify that the user sends a string in the name field when creating a city', function (done) {
        request(app)
            .post(`/api/cities/`)
            .send({
                name: "Buenos Aires 2",
                continent: "America",
                photo: "https://i.ibb.co/txzvqGy/buenos-aires.webp",
                population: 3075646,
                userId: "636d82c86529ebe93bbef921"
            })
            .expect(res => {
                assert.isString(res.body.new_city.name)
            })
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
    it('Verify that it returns success false when unable to create a hotel', function (done) {
        request(app)
            .post(`/api/cities/`)
            .send({
                population: 565565,
            })
            .expect(res => res.success === false)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    })
})