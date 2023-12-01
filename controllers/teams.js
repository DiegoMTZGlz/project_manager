const express = require('express');
const Team = require('../models/team');

function create(req, res, next){
    let usernameList = req.body.usernameList

    let team = new Team({
        usernameList: usernameList
    });

    team.save().then(obj => res.status(200).json({
        msg: res.__('teams.create.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('teams.create.wrong'),
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page? req.params.page :1;
    const options = {
        page: page,
        limit: 5
    };
    Team.paginate({},options).then(objs => res.status(200).json({
        msg: res.__('teams.list.ok'),
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: res.__('teams.list.wrong'),
        obj: ex
    }));
}

function index(req, res, next){
    const id = req.params.id;
    Team.findOne({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('teams.index.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('teams.index.wrong')+`${id}`,
        obj: ex
    }));
}

function replace(req, res, next){
    const id = req.params.id;
    let usernameList = req.body.usernameList ? req.body.usernameList : "";

    const team = new Object({
        _usernameList: usernameList
    });

    Team.findOneAndUpdate({"_id":id}, team, {new: true}).then(obj => res.status(200).json({
        msg: res.__('teams.replace.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('teams.replace.wrong')+`${id}`,
        obj: ex
    }));
}

function update(req, res, next){
    const id = req.params.id;
    let usernameList = req.body.usernameList;

    const team = new Object()
        if (usernameList) team._usernameList = usernameList;

    Team.findOneAndUpdate({"_id":id}, team).then(obj => res.status(200).json({
        msg: res.__('teams.update.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('teams.update.wrong')+`${id}`,
        obj: ex
    }));    
}

function destroy(req, res, next){
    const id = req.params.id;
    
    Team.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('teams.destroy.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg:  res.__('teams.destroy.wrong')+`${id}`,
        obj: ex
    }));
}

module.exports = {
    create, list, index, replace, update, destroy
};