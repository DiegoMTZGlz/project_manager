const express = require('express');

function create(req, res, next){
    res.send('Skill create')
}

function list(req, res, next) {
    res.send('Skills list');
}

function index(req, res, next){
    res.send('Skill index')
}

function replace(req, res, next){
    res.send('Skill replace')
}

function update(req, res, next){
    res.send('Skill update')
}

function destroy(req, res, next){
    res.send('Skill destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};