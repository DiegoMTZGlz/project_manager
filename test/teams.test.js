//d
const supertest = require('supertest');

const app = require('../app');

let token;
beforeAll((done) => {
    supertest(app)
        .post("/login")
        .send({ "username": "fuan200", "password": "muy_secreto" })
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            token = res.body.obj;
            done();
        });
});

describe("Probar create de team", () => {
    it("Deberia de crear un equipo", (done) => {
        supertest(app).post('/teams').set('Authorization', `Bearer ${token}`)
        .send({"usernameList": ["65694aa8013892d053e8bf5d"]})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no crear un equipo", (done) => {
        supertest(app).post('/teams')
        .send({"usernameList": ["65694aa8013892d053e8bf5d"]})
        .expect(401)
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
    it("Deberia de obtener un equipo", (done) => {
        supertest(app).get('/teams/65694b1610c0f4262b0a8b53').set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no obtener un equipo", (done) => {
        supertest(app).get('/teams/65694b1610c0f4262b0a8b53')
        .expect(401)
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
    it("Deberia de obtener una lista de equipos", (done) => {
        supertest(app).get('/teams').set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no obtener una lista de equipos", (done) => {
        supertest(app).get('/teams')
        .expect(401)
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
    it("Deberia de modificar un atributo de un equipo", (done) => {
        supertest(app).put('/teams/65694b1610c0f4262b0a8b53').set('Authorization', `Bearer ${token}`)
        .send({"usernameList": ["65694aa8013892d053e8bf5d", "65694be33366282c1e8b952c"]})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no modificar un atributo de un equipo", (done) => {
        supertest(app).put('/teams/65694b1610c0f4262b0a8b53')
        .send({"usernameList": ["65694aa8013892d053e8bf5d", "65694be33366282c1e8b952c"]})
        .expect(401)
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
    it("Deberia de actualizar un equipo", (done) => {
        supertest(app).patch('/teams/65694b1610c0f4262b0a8b53').set('Authorization', `Bearer ${token}`)
        .send({"usernameList": ["65694be33366282c1e8b952c"]})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no actualizar un equipo", (done) => {
        supertest(app).patch('/teams/65694b1610c0f4262b0a8b53')
        .send({"usernameList": ["65694be33366282c1e8b952c"]})
        .expect(401)
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
    it("Deberia de eliminar un equipo", (done) => {
        supertest(app).delete('/teams/65694b1610c0f4262b0a8b53').set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no eliminar un equipo", (done) => {
        supertest(app).delete('/teams/65694b1610c0f4262b0a8b53')
        .expect(401)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
})
