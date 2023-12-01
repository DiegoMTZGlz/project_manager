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

describe("Probar create de user", () => {
    it("Deberia de crear un usuario", (done) => {
        supertest(app).post('/users').set('Authorization', `Bearer ${token}`)
        .send({"username": "Mario MM", "password": "M1234", "salt": "sal",
        "name": "Mario", "lastName": "Márquez Márquez", "birthday": "2000-10-10",
        "curp": "MAMM001010HCHRRRA2", "rfc": "MAMM001010N40",
        "socials": [{"type": "GITHUB", "usernameSocial": "MarioMárquezx2"}],
        "skills": [{"skillName": "JavaScript", "skillLevel": "SENIOR"}],
        "address": {"street": "Imargo Lorez", "number": "219",
        "colony": "Meran", "zipcode": "32150", "city": "Chihuahua",
        "state": "Chihuahua", "country": "México"}, "roles": [{"type": "MANAGER"}]})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no crear un usuario", (done) => {
        supertest(app).post('/users')
        .send({"username": "Mario MM", "password": "M1234", "salt": "sal",
        "name": "Mario", "lastName": "Márquez Márquez", "birthday": "2000-10-10",
        "curp": "MAMM001010HCHRRRA2", "rfc": "MAMM001010N40",
        "socials": [{"type": "GITHUB", "usernameSocial": "MarioMárquezx2"}],
        "skills": [{"skillName": "JavaScript", "skillLevel": "SENIOR"}],
        "address": {"street": "Imargo Lorez", "number": "219",
        "colony": "Meran", "zipcode": "32150", "city": "Chihuahua",
        "state": "Chihuahua", "country": "México"}, "roles": [{"type": "MANAGER"}]})
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

describe("Probar get de user", () => {
    it("Deberia de obtener un usuario", (done) => {
        supertest(app).get('/users/656959b4ff2207963b63daf0').set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no obtener un usuario", (done) => {
        supertest(app).get('/users/656959b4ff2207963b63daf0')
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

describe("Probar get list de user", () => {
    it("Deberia de obtener una lista de usuarios", (done) => {
        supertest(app).get('/users').set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no obtener una lista de usuarios", (done) => {
        supertest(app).get('/users')
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

describe("Probar put user", () => {
    it("Deberia de modificar un atributo de un usuario", (done) => {
        supertest(app).put('/users/656959b4ff2207963b63daf0').set('Authorization', `Bearer ${token}`)
        .send({"skills": [{"skillName": "JavaScript", "skillLevel": "SENIOR"}, {"skillName": "Python", "skillLevel": "JUNIOR"}]})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no modificar un atributo de un usuario", (done) => {
        supertest(app).put('/users/656959b4ff2207963b63daf0')
        .send({"skills": [{"skillName": "JavaScript", "skillLevel": "SENIOR"}, {"skillName": "Python", "skillLevel": "JUNIOR"}]})
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

describe("Probar patch user", () => {
    it("Deberia de actualizar un usuario", (done) => {
        supertest(app).patch('/users/656959b4ff2207963b63daf0').set('Authorization', `Bearer ${token}`)
        .send({"skills": [{"skillName": "JavaScript", "skillLevel": "MASTER"}]})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no actualizar un usuario", (done) => {
        supertest(app).patch('/users/656959b4ff2207963b63daf0')
        .send({"skills": [{"skillName": "JavaScript", "skillLevel": "MASTER"}]})
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

describe("Probar delete user", () => {
    it("Deberia de eliminar un usuario", (done) => {
        supertest(app).delete('/users/656959b4ff2207963b63daf0').set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no eliminar un usuario", (done) => {
        supertest(app).delete('/users/656959b4ff2207963b63daf0')
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