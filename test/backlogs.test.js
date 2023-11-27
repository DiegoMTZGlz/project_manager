//j
const supertest = require('supertest');

const app = require('../app');

describe("Probar create de backlog", () => {
    it("Deberia de crear un backlog", (done) => {
        supertest(app).post('/backlogs')
        .send({})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no crear un backlog", (done) => {
        supertest(app).post('/backlogs')
        .send({})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
})