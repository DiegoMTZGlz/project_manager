const express = require('express');

function create(req, res, next){
    res.send('Story Card create')
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