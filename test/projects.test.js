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

describe("Probar create de projects", () => {
    it("Deberia de crear un proyecto", (done) => {
        supertest(app).post('/projects').set('Authorization', `Bearer ${token}`)
        .send({"projectName":"Project manager", "projectRequestDate":"2023-10-10", 
        "projectStartDate":"2023-10-12", "projectDescription":"Crear un project manager", 
        "projectManager":"65626e8c837e0bd199f25511", "projectOwner":"65626e8c837e0bd199f25511", "team":"6567c7775197615824d65bee", 
        "productBacklog":"65626e8c837e0bd199f24b41", 
        "releaseBacklog":"654d5b5f6929ca671b680bbf", "sprintBacklog":"656188b2fe2e51abe35815c0"})
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
        .send({"projectName":"Project manager", "projectRequestDate":"2023-10-10", 
        "projectStartDate":"2023-10-12", "projectDescription":"Crear un project manager", 
        "projectManager":"65626e8c837e0bd199f25511", "projectOwner":"65626e8c837e0bd199f25511", "team":"6567c7775197615824d65bee", 
        "productBacklog":"65626e8c837e0bd199f24b41", 
        "releaseBacklog":"654d5b5f6929ca671b680bbf", "sprintBacklog":"656188b2fe2e51abe35815c0"})
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

describe("Probar get de project", () => {
    it("Deberia de obtener un proyecto", (done) => {
        supertest(app).get('/projects/65692cde9875534f7f22b17c').set('Authorization', `Bearer ${token}`)
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
        supertest(app).get('/projects/65692cde9875534f7f22b17c')
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

describe("Probar get list de project", () => {
    it("Deberia de obtener una lista de proyectos", (done) => {
        supertest(app).get('/projects').set('Authorization', `Bearer ${token}`)
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

describe("Probar put project", () => {
    it("Deberia de modificar un atributo de un proyecto", (done) => {
        supertest(app).put('/projects/65692cde9875534f7f22b17c').set('Authorization', `Bearer ${token}`)
        .send({"projectName" : "Project Manager Version 2"})
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
        supertest(app).put('/projects/65692cde9875534f7f22b17c')
        .send({"projectName" : "Project Manager Version 2"})
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

describe("Probar patch project", () => {
    it("Deberia de actualizar un proyecto", (done) => {
        supertest(app).patch('/projects/65692cde9875534f7f22b17c').set('Authorization', `Bearer ${token}`)
        .send({"team":"65692d899875534f7f22b186"})
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
        supertest(app).patch('/projects/65692cde9875534f7f22b17c')
        .send({"team":"65692d899875534f7f22b186"})
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

describe("Probar delete project", () => {
    it("Deberia de eliminar un proyecto", (done) => {
        supertest(app).delete('/projects/65692cde9875534f7f22b17c')
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
        supertest(app).delete('/projects/65692cde9875534f7f22b17c')
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