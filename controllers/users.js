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
        msg: res.__('users.create.ok'),
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
    const id = req.params.id;
    User.findOne({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('users.index.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('users.index.wrong')+`${id}`,
        obj: ex
    }));
}

async function replace(req, res, next){
    const id = req.params.id;
    let username = req.body.username ? req.body.username : "";
    let password = req.body.password ? req.body.password : "";
    let salt = await bcrypt.genSalt(10);
    let name = req.body.name ? req.body.name : "";
    let lastName = req.body.lastName ? req.body.lastName : "";
    let birthdate = req.body.birthdate ? req.body.birthdate : "";
    let curp = req.body.curp ? req.body.curp : "";
    let rfc = req.body.rfc ? req.body.rfc : "";
    let role = req.body.role ? req.body.role : "";

    let socials = []
    for (let i = 0; req.body[`socials[${i}][type]`]; i++) {
        let social = {
            type: req.body[`socials[${i}][type]`] ? req.body[`socials[${i}][type]`] : "",
            usernameSocial: req.body[`socials[${i}][usernameSocial]`] ? req.body[`socials[${i}][usernameSocial]`] : "",
        };
        socials.push(social);
    }

    let skills = []
    for (let i = 0; req.body[`skills[${i}][skillName]`]; i++) {
        let skill = {
            skillName: req.body[`skills[${i}][skillName]`] ? req.body[`skills[${i}][skillName]`] : "",
            skillLevel: req.body[`skills[${i}][skillLevel]`] ? req.body[`skills[${i}][skillLevel]`] : "",
        };
        skills.push(skill);
    }

    let address = new Object();
    address.street = req.body.street ? req.body.street : "";
    address.number = req.body.number ? req.body.number : "";
    address.colony = req.body.colony ? req.body.colony : "";
    address.zipcode = req.body.zipcode ? req.body.zipcode : "";
    address.city = req.body.city ? req.body.city : "";
    address.state = req.body.state ? req.body.state : "";
    address.country = req.body.country ? req.body.country : "";
    
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new Object({
        _username: username,
        _password: passwordHash,
        _salt: salt,
        _name: name,
        _lastName: lastName,
        _birthdate: birthdate,
        _curp: curp,
        _rfc: rfc,
        _socials: socials,
        _skills: skills,
        _address: address,
        _roles: role
    });

    User.findOneAndUpdate({"_id":id}, user, {new: true}).then(obj => res.status(200).json({
        msg: res.__('users.replace.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('users.replace.wrong')+`${id}`,
        obj: ex
    }));
}

async function update(req, res, next){
    const id = req.params.id;

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

    let user = new Object()
        if (username) user._username = username;
        if (password) user._password = passwordHash;
        if (salt) user._salt = salt;
        if (name) user._name = name;
        if (lastName) user._lastName = lastName;
        if (birthdate) user._birthdate = birthdate;
        if (curp) user._curp = curp;
        if (rfc) user._rfc = rfc;
        if (socials) user._socials = socials;
        if (skills) user._skills = skills;
        if (address) user._address = address;
        if (role) user._roles = role;

    User.findOneAndUpdate({"_id":id}, user).then(obj => res.status(200).json({
        msg: res.__('users.update.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('users.update.wrong')+`${id}`,
        obj: ex
    }));
}

function destroy(req, res, next){
    const id = req.params.id;

    User.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('users.destroy.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg:  res.__('users.destroy.wrong')+`${id}`,
        obj: ex
    }));
}

module.exports = {
    create, list, index, replace, update, destroy
};