//d
const supertest = require('supertest');

const app = require('../app');

describe("Probar create de storyCard", () => {
    it("Deberia de crear un storyCard", (done) => {
        supertest(app).post('/storyCards')
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
    
    it("Deberia de no crear un storyCard", (done) => {
        supertest(app).post('/storyCards')
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

describe("Probar get de storyCard", () => {
    it("Deberia de obtener un storyCard", (done) => {
        supertest(app).get('/storyCards')
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
    
    it("Deberia de no obtener un storyCard", (done) => {
        supertest(app).get('/storyCards')
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

describe("Probar get list de storyCard", () => {
    it("Deberia de obtener una lista de storyCards", (done) => {
        supertest(app).get('/storyCards')
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
    
    it("Deberia de no obtener una lista de storyCards", (done) => {
        supertest(app).get('/storyCards')
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

describe("Probar put storyCard", () => {
    it("Deberia de modificar un atributo de un storyCard", (done) => {
        supertest(app).put('/storyCards')
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
    
    it("Deberia de no modificar un atributo de un storyCard", (done) => {
        supertest(app).put('/storyCards')
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

describe("Probar patch storyCard", () => {
    it("Deberia de actualizar un storyCard", (done) => {
        supertest(app).patch('/storyCards')
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
    
    it("Deberia de no actualizar un storyCard", (done) => {
        supertest(app).patch('/storyCards')
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

describe("Probar delete storyCard", () => {
    it("Deberia de eliminar un storyCard", (done) => {
        supertest(app).delete('/storyCards')
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
    
    it("Deberia de no eliminar un storyCard", (done) => {
        supertest(app).delete('/storyCards')
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