//j
const supertest = require('supertest');

const app = require('../app');

describe("Probar create de projects", () => {
    it("Deberia de crear un proyecto", (done) => {
        supertest(app).post('/projects')
        .send({"projectName":"Project manager", "projectRequestDate":"2023-10-10", 
        "projectStartDate":"2023-10-12", "projectDescription":"Crear un project manager", 
        "projectManager":"65626e8c837e0bd199f25511", "projectOwner":"65626e8c837e0bd199f25511", "team":"6567c7775197615824d65bee", 
        "productBacklog":"", 
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

describe("Probar get de project", () => {
    it("Deberia de obtener un proyecto", (done) => {
        supertest(app).get('/projects')
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
    
    it("Deberia de no obtener un proyect", (done) => {
        supertest(app).get('/projects')
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

describe("Probar get list de project", () => {
    it("Deberia de obtener una lista de proyectos", (done) => {
        supertest(app).get('/projects')
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
    
    it("Deberia de no obtener una lista de proyectos", (done) => {
        supertest(app).get('/projects')
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

describe("Probar put project", () => {
    it("Deberia de modificar un atributo de un proyecto", (done) => {
        supertest(app).put('/projects')
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
    
    it("Deberia de no modificar un atributo de un proyecto", (done) => {
        supertest(app).put('/projects')
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

describe("Probar patch project", () => {
    it("Deberia de actualizar un proyecto", (done) => {
        supertest(app).patch('/projects')
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
    
    it("Deberia de no actualizar un proyecto", (done) => {
        supertest(app).patch('/projects')
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

describe("Probar delete project", () => {
    it("Deberia de eliminar un proyecto", (done) => {
        supertest(app).delete('/projects')
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
    
    it("Deberia de no eliminar un proyecto", (done) => {
        supertest(app).delete('/projects')
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