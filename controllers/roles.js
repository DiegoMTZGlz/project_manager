const express = require('express');
const Role = require('../models/role')

function create(req, res, next){
    let role = req.body.role;

    let userRole = new Role({
        role: role
    });

    userRole.save().then(obj => res.status(200).json({
        msg: res.__('roles.create.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('roles.create.wrong'),
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page? req.params.page :1;
    const options = {
        page: page,
        limit: 5
    };
    Role.paginate({},options).then(objs => res.status(200).json({
        msg: res.__('roles.list.ok'),
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: res.__('roles.list.wrong'),
        obj: ex
    }));
}

function index(req, res, next){
    const id = req.params.id;
    User.findOne({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('roles.index.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('roles.index.wrong')+`${id}`,
        obj: ex
    }));
}

function replace(req, res, next){
    const id = req.params.id;
    const role = req.body.role ? req.body.role : "";

    const userRole = new Object({
        _role: role,
    });

    Role.findOneAndUpdate({"_id":id}, userRole, {new: true}).then(obj => res.status(200).json({
        msg: res.__('roles.replace.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('roles.replace.wrong')+`${id}`,
        obj: ex
    }));
}

function update(req, res, next){
    const id = req.params.id;
    const role = req.body.role;

    const userRole = new Object();
    if(role) userRole._role = role;

    Role.findOneAndUpdate({"_id":id}, userRole).then(obj => res.status(200).json({
        msg: res.__('roles.update.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('roles.update.wrong')+`${id}`,
        obj: ex
    }));
}

function destroy(req, res, next){
    const id = req.params.id;
    
    Role.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('roles.destroy.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg:  res.__('roles.destroy.wrong')+`${id}`,
        obj: ex
    }));
}

module.exports = {
    create, list, index, replace, update, destroy
};