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
    res.send('Story Cards list');
}

function index(req, res, next){
    res.send('Story Card index')
}

function replace(req, res, next){
    res.send('Story Card replace')
}

function update(req, res, next){
    res.send('Story Card update')
}

function destroy(req, res, next){
    res.send('Story Card destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};