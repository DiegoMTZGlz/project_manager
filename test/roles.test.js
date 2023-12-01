//j
const supertest = require('supertest');

const app = require('../app');

let token;
beforeAll((done) => {
    supertest(app)
        .post("/login")
        .send({ "username": "fuan200", "password": "fuan200" })
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            token = res.body.obj;
            done();
        });
});

describe("Probar create de rol", () => {
    it("Deberia de crear un rol", (done) => {
        supertest(app).post('/roles')
        .send({"role":"workers"}).set('Authorization', `Bearer ${token}`)
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
        .send({"role":"workers"})
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

describe("Probar get de rol", () => {
    it("Deberia de obtener un rol", (done) => {
        supertest(app).get('/roles/6569310d9875534f7f22b1ae').set('Authorization', `Bearer ${token}`)
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
        supertest(app).get('/roles/6569310d9875534f7f22b1ae')
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

describe("Probar get list de rol", () => {
    it("Deberia de obtener una lista de rols", (done) => {
        supertest(app).get('/roles').set('Authorization', `Bearer ${token}`)
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

describe("Probar put rol", () => {
    it("Deberia de modificar un atributo de un rol", (done) => {
        supertest(app).put('/roles/6569310d9875534f7f22b1ae').set('Authorization', `Bearer ${token}`)
        .send({"role":"worker"})
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
        supertest(app).put('/roles/6569310d9875534f7f22b1ae')
        .send({"role":"worker"})
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

describe("Probar patch rol", () => {
    it("Deberia de actualizar un rol", (done) => {
        supertest(app).patch('/roles/6569310d9875534f7f22b1ae').set('Authorization', `Bearer ${token}`)
        .send({"role":"worker"})
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
        supertest(app).patch('/roles/6569310d9875534f7f22b1ae')
        .send({"role":"worker"})
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
        supertest(app).delete('/roles/6569310d9875534f7f22b1ae').set('Authorization', `Bearer ${token}`)
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
        supertest(app).delete('/roles/6569310d9875534f7f22b1ae')
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