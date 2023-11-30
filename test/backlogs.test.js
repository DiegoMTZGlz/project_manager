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

describe("Probar get de backlog", () => {
    it("Deberia de obtener un backlog", (done) => {
        supertest(app).get('/backlogs')
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
    
    it("Deberia de no obtener un backlog", (done) => {
        supertest(app).get('/backlogs')
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

describe("Probar get list de backlog", () => {
    it("Deberia de obtener una lista de backlogs", (done) => {
        supertest(app).get('/backlogs')
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
    
    it("Deberia de no obtener una lista de backlogs", (done) => {
        supertest(app).get('/backlogs')
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

describe("Probar put backlog", () => {
    it("Deberia de modificar un atributo de un backlog", (done) => {
        supertest(app).put('/backlogs')
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
    
    it("Deberia de no modificar un atributo de un backlog", (done) => {
        supertest(app).put('/backlogs')
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

describe("Probar patch backlog", () => {
    it("Deberia de actualizar un backlog", (done) => {
        supertest(app).patch('/backlogs')
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
    
    it("Deberia de no actualizar un backlog", (done) => {
        supertest(app).patch('/backlogs')
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

describe("Probar delete backlog", () => {
    it("Deberia de eliminar un backlog", (done) => {
        supertest(app).delete('/backlogs')
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
    
    it("Deberia de no eliminar un backlog", (done) => {
        supertest(app).delete('/backlogs')
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