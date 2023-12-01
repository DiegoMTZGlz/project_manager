//j
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

describe("Probar create de backlog", () => {
    it("Deberia de crear un backlog", (done) => {
        supertest(app).post('/backlogs').set('Authorization', `Bearer ${token}`)
        .send({"storyCardList" : "65692e449875534f7f22b190"})
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
        .send({"storyCardList" : "65692e449875534f7f22b190"})
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

describe("Probar get de backlog", () => {
    it("Deberia de obtener un backlog", (done) => {
        supertest(app).get('/backlogs/65692e5a9875534f7f22b19a').set('Authorization', `Bearer ${token}`)
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
        supertest(app).get('/backlogs/65692e5a9875534f7f22b19a')
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

describe("Probar get list de backlog", () => {
    it("Deberia de obtener una lista de backlogs", (done) => {
        supertest(app).get('/backlogs/65692e5a9875534f7f22b19a').set('Authorization', `Bearer ${token}`)
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
        supertest(app).get('/backlogs/65692e5a9875534f7f22b19a')
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

describe("Probar put backlog", () => {
    it("Deberia de modificar un atributo de un backlog", (done) => {
        supertest(app).put('/backlogs/65692e5a9875534f7f22b19a').set('Authorization', `Bearer ${token}`)
        .send({"storyCardList" : "65692f4e9875534f7f22b1a4"})
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
        supertest(app).put('/backlogs/65692e5a9875534f7f22b19a')
        .send({"storyCardList" : "65692f4e9875534f7f22b1a4"})
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

describe("Probar patch backlog", () => {
    it("Deberia de actualizar un backlog", (done) => {
        supertest(app).patch('/backlogs/65692e5a9875534f7f22b19a').set('Authorization', `Bearer ${token}`)
        .send({"storyCardList" : "65692f4e9875534f7f22b1a4"})
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
        supertest(app).patch('/backlogs/65692e5a9875534f7f22b19a')
        .send({"storyCardList" : "65692f4e9875534f7f22b1a4"})
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

describe("Probar delete backlog", () => {
    it("Deberia de eliminar un backlog", (done) => {
        supertest(app).delete('/backlogs/65692e5a9875534f7f22b19a').set('Authorization', `Bearer ${token}`)
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
        supertest(app).delete('/backlogs/65692e5a9875534f7f22b19a')
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