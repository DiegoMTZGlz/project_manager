//j
const supertest = require('supertest');

const app = require('../app');

describe("Probar create de rol", () => {
    it("Deberia de crear un rol", (done) => {
        supertest(app).post('/roles')
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
    
    it("Deberia de no crear un rol", (done) => {
        supertest(app).post('/roles')
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

describe("Probar get de rol", () => {
    it("Deberia de obtener un rol", (done) => {
        supertest(app).get('/roles')
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
    
    it("Deberia de no obtener un rol", (done) => {
        supertest(app).get('/roles')
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

describe("Probar get list de rol", () => {
    it("Deberia de obtener una lista de rols", (done) => {
        supertest(app).get('/roles')
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
    
    it("Deberia de no obtener una lista de rols", (done) => {
        supertest(app).get('/roles')
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

describe("Probar put rol", () => {
    it("Deberia de modificar un atributo de un rol", (done) => {
        supertest(app).put('/roles')
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
    
    it("Deberia de no modificar un atributo de un rol", (done) => {
        supertest(app).put('/roles')
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

describe("Probar patch rol", () => {
    it("Deberia de actualizar un rol", (done) => {
        supertest(app).patch('/roles')
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
    
    it("Deberia de no actualizar un rol", (done) => {
        supertest(app).patch('/roles')
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

describe("Probar delete rol", () => {
    it("Deberia de eliminar un rol", (done) => {
        supertest(app).delete('/roles')
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
    
    it("Deberia de no eliminar un rol", (done) => {
        supertest(app).delete('/roles')
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