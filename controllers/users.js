const express = require('express');
const User = require ('../models/user');
const bcrypt = require ('bcrypt');

async function create(req, res, next){
    let username = req.body.username;
    let password = req.body.password;
    let salt = await bcrypt.genSalt(10);
    let name = req.body.name;
    let lastName = req.body.lastName;
    let birthdate = req.body.birthdate;
    let curp = req.body.curp;
    let rfc = req.body.rfc;
    let role = req.body.role;

    let socials = []
    for (let i = 0; req.body[`socials[${i}][type]`]; i++) {
        let social = {
            type: req.body[`socials[${i}][type]`],
            usernameSocial: req.body[`socials[${i}][usernameSocial]`],
        };
        socials.push(social);
    }

    let skills = []
    for (let i = 0; req.body[`skills[${i}][skillName]`]; i++) {
        let skill = {
            skillName: req.body[`skills[${i}][skillName]`],
            skillLevel: req.body[`skills[${i}][skillLevel]`],
        };
        skills.push(skill);
    }

    let address = new Object();
    address.street = req.body.street;
    address.number = req.body.number;
    address.colony = req.body.colony;
    address.zipcode = req.body.zipcode;
    address.city = req.body.city;
    address.state = req.body.state;
    address.country = req.body.country;
    
    const passwordHash = await bcrypt.hash(password, salt);

    let user = new User({
        username: username,
        password: passwordHash,
        salt: salt,
        name: name,
        lastName: lastName,
        birthdate: birthdate,
        curp: curp,
        rfc: rfc,
        socials: socials,
        skills: skills,
        address: address,
        role: role
    });

    user.save().then(obj => res.status(200).json({
        msg: res._('users.create.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('users.create.wrong'),
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page? req.params.page :1;
    const options = {
        page: page,
        limit: 5
    };
    User.paginate({},options).then(objs => res.status(200).json({
        msg: res.__('users.list.ok'),
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: res.__('users.list.wrong'),
        obj: ex
    }));
}

function index(req, res, next){
    res.send('User index')
}

function replace(req, res, next){
    res.send('User replace')
}

function update(req, res, next){
    res.send('User update')
}

function destroy(req, res, next){
    res.send('User destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};