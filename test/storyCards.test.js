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

describe("Probar create de storyCard", () => {
    it("Deberia de crear una tarjeta de historia", (done) => {
        supertest(app).post('/storyCards').set('Authorization', `Bearer ${token}`)
        .send({"name": "Enhancement of User Flow", "priority": 2, "role": "End User",
        "size": 3, "functionality": "Integrate Commenting Feature",
        "benefit": "Enhances User Interaction", "context": "Main Page of the Application",
        "event": [{"type": "Clicking on the comments button", "type": "Submitting a comment"}],
        "result": [{"type": "Visible Comment Interface", "type": "Notification of Comment Submission"}]})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no crear una tarjeta de historia", (done) => {
        supertest(app).post('/storyCards')
        .send({"name": "Enhancement of User Flow", "priority": 2, "role": "End User",
        "size": 3, "functionality": "Integrate Commenting Feature",
        "benefit": "Enhances User Interaction", "context": "Main Page of the Application",
        "event": ["Clicking on the comments button", "Submitting a comment"],
        "result": ["Visible Comment Interface", "Notification of Comment Submission"]})
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

describe("Probar get de storyCard", () => {
    it("Deberia de obtener una tarjeta de historia", (done) => {
        supertest(app).get('/storyCards/6569423ab05f70233e5f2e59').set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no obtener una tarjeta de historia", (done) => {
        supertest(app).get('/storyCards/6569423ab05f70233e5f2e59')
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

describe("Probar get list de storyCard", () => {
    it("Deberia de obtener una lista de tarjetas de historia", (done) => {
        supertest(app).get('/storyCards').set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no obtener una lista de tarjetas de historia", (done) => {
        supertest(app).get('/storyCards')
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

describe("Probar put storyCard", () => {
    it("Deberia de modificar un atributo de una tarjeta de historia", (done) => {
        supertest(app).put('/storyCards/6569423ab05f70233e5f2e59').set('Authorization', `Bearer ${token}`)
        .send({"priority": 1})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no modificar un atributo de una tarjeta de historia", (done) => {
        supertest(app).put('/storyCards/6569423ab05f70233e5f2e59')
        .send({"priority": 1})
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

describe("Probar patch storyCard", () => {
    it("Deberia de actualizar una tarjeta de historia", (done) => {
        supertest(app).patch('/storyCards/6569423ab05f70233e5f2e59').set('Authorization', `Bearer ${token}`)
        .send({"benefit": "Enhances User Interaction and Fluidity"})
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no actualizar una tarjeta de historia", (done) => {
        supertest(app).patch('/storyCards/6569423ab05f70233e5f2e59')
        .send({"benefit": "Enhances User Interaction and Fluidity"})
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

describe("Probar delete storyCard", () => {
    it("Deberia de eliminar una tarjeta de historia", (done) => {
        supertest(app).delete('/storyCards/6569423ab05f70233e5f2e59').set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res){
            if(err){
                done(err);
            } else {
                done();
            };
        })
    })
    
    it("Deberia de no eliminar una tarjeta de historia", (done) => {
        supertest(app).delete('/storyCards/6569423ab05f70233e5f2e59')
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