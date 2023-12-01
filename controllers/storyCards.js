const express = require('express');
const StoryCard = require('../models/storyCard');

function create(req, res, next){
    let name = req.body.name;
    let priority = req.body.priority;
    let role = req.body.role;
    let size = req.body.size;
    let functionality = req.body.functionality;
    let benefit = req.body.benefit;
    let context = req.body.context;
    let event = req.body.event;
    let result = req.body.result;

    let storyCard = new StoryCard({
        name: name,
        priority: priority,
        role: role,
        size: size,
        functionality: functionality,
        benefit: benefit,
        context: context,
        event: event,
        result: result
    })
    
    storyCard.save().then(obj => res.status(200).json({
        msg: res.__('storyCards.create.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('storyCards.create.wrong'),
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page? req.params.page :1;
    const options = {
        page: page,
        limit: 5
    };
    StoryCard.paginate({},options).then(objs => res.status(200).json({
        msg: res.__('storyCards.list.ok'),
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: res.__('storyCards.list.wrong'),
        obj: ex
    }));
}

function index(req, res, next){
    const id = req.params.id;
    StoryCard.findOne({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('storyCards.index.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('storyCards.index.wrong')+`${id}`,
        obj: ex
    }));
}

function replace(req, res, next){
    const id = req.params.id;
    let name = req.body.name ? req.body.name : "";
    let priority = req.body.priority ? req.body.priority : "";
    let role = req.body.role ? req.body.role : "";
    let size = req.body.size ? req.body.size : "";
    let functionality = req.body.functionality ? req.body.functionality : "";
    let benefit = req.body.benefit ? req.body.benefit : "";
    let context = req.body.context ? req.body.context : "";
    let event = req.body.event ? req.body.event : "";
    let result = req.body.result ? req.body.result : "";

    const storyCard = new Object({
        _name: name,
        _priority: priority,
        _role: role,
        _size: size,
        _functionality: functionality,
        _benefit: benefit,
        _context: context,
        _event: event,
        _result: result
    });

    StoryCard.findOneAndUpdate({"_id":id}, storyCard, {new: true}).then(obj => res.status(200).json({
        msg: res.__('storyCards.replace.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('storyCards.replace.wrong')+`${id}`,
        obj: ex
    }));
}

function update(req, res, next){
    const id = req.params.id;
    let name = req.body.name;
    let priority = req.body.priority;
    let role = req.body.role;
    let size = req.body.size;
    let functionality = req.body.functionality;
    let benefit = req.body.benefit;
    let context = req.body.context;
    let event = req.body.event;
    let result = req.body.result;

    const storyCard = new Object()
        if (name) storyCard._name = name;
        if (priority) storyCard._priority = priority;
        if (role) storyCard._role = role;
        if (size) storyCard._size = size;
        if (functionality) storyCard._functionality = functionality;
        if (benefit) storyCard._benefit = benefit;
        if (context) storyCard._context = context;
        if (event) storyCard._event = event;
        if (result) storyCard._result = result;

    
    StoryCard.findOneAndUpdate({"_id":id}, storyCard).then(obj => res.status(200).json({
        msg: res.__('storyCards.update.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('storyCards.update.wrong')+`${id}`,
        obj: ex
    }));        
}

function destroy(req, res, next){
    const id = req.params.id;
    
    StoryCard.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('storyCards.destroy.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg:  res.__('storyCards.destroy.wrong')+`${id}`,
        obj: ex
    }));
}

module.exports = {
    create, list, index, replace, update, destroy
};