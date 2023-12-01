//d
const supertest = require('supertest');

const app = require('../app');

describe("Probar create de team", () => {
    it("Deberia de crear un team", (done) => {
        supertest(app).post('/teams')
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
    
    it("Deberia de no crear un team", (done) => {
        supertest(app).post('/teams')
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

describe("Probar get de team", () => {
    it("Deberia de obtener un team", (done) => {
        supertest(app).get('/teams')
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
    
    it("Deberia de no obtener un team", (done) => {
        supertest(app).get('/teams')
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

describe("Probar get list de team", () => {
    it("Deberia de obtener una lista de teams", (done) => {
        supertest(app).get('/teams')
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
    
    it("Deberia de no obtener una lista de teams", (done) => {
        supertest(app).get('/teams')
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

describe("Probar put team", () => {
    it("Deberia de modificar un atributo de un team", (done) => {
        supertest(app).put('/teams')
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
    
    it("Deberia de no modificar un atributo de un team", (done) => {
        supertest(app).put('/teams')
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

describe("Probar patch team", () => {
    it("Deberia de actualizar un team", (done) => {
        supertest(app).patch('/teams')
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
    
    it("Deberia de no actualizar un team", (done) => {
        supertest(app).patch('/teams')
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

describe("Probar delete team", () => {
    it("Deberia de eliminar un team", (done) => {
        supertest(app).delete('/teams')
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
    
    it("Deberia de no eliminar un team", (done) => {
        supertest(app).delete('/teams')
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
