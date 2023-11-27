//j
const supertest = require('supertest');

const app = require('../app');

describe("Probar create de projects", () => {
    it("Deberia de crear un proyecto", (done) => {
        supertest(app).post('/projects')
        .send({"projectName":"", "projectRequestDate":"", 
               "projectStartDate":"", "projectDescription":"", 
               "projectManager":"", "projectOwner":"", "team":"", 
               "userRoles":"", "productBacklog":"", 
               "releaseBacklog":"", "sprintBacklog":""})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no crear un proyecto", (done) => {
        supertest(app).post('/projects')
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