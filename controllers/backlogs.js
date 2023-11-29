const express = require('express');
const Backlog = require('../models/backlog');

function create(req, res, next){
    let storyCardList = req.body.storyCardList

    let backlog = new Backlog({
        storyCardList: storyCardList
    });

    backlog.save().then(obj => res.status(200).json({
        msg: res.__('backlogs.create.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('backlogs.create.wrong'),
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page? req.params.page :1;
    const options = {
        page: page,
        limit: 5
    };
    Backlog.paginate({},options).then(objs => res.status(200).json({
        msg: res.__('backlogs.list.ok'),
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: res.__('backlogs.list.wrong'),
        obj: ex
    }));
}

function index(req, res, next){
    const id = req.params.id;
    Backlog.findOne({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('backlogs.index.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('backlogs.index.wrong')+`${id}`,
        obj: ex
    }));
}

function replace(req, res, next){
    const id = req.params.id;
    let storyCardList = req.body.storyCardList ? req.body.storyCardList : "";

    const backlog = new Object({
        _storyCardList: storyCardList
    });

    Backlog.findOneAndUpdate({"_id":id}, backlog, {new: true}).then(obj => res.status(200).json({
        msg: res.__('backlogs.replace.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('backlogs.replace.wrong')+`${id}`,
        obj: ex
    }));
}

function update(req, res, next){
    const id = req.params.id;
    let storyCardList = req.body.storyCardList;

    const backlog = new Object()
        if (storyCardList) backlog._storyCardList = storyCardList;

    Backlog.findOneAndUpdate({"_id":id}, backlog).then(obj => res.status(200).json({
        msg: res.__('backlogs.update.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('backlogs.update.wrong')+`${id}`,
        obj: ex
    }));    
}

function destroy(req, res, next){
    const id = req.params.id;
    Backlog.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('backlogs.destroy.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg:  res.__('backlogs.destroy.wrong')+`${id}`,
        obj: ex
    }));
}

module.exports = {
    create, list, index, replace, update, destroy
};