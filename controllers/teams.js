const express = require('express');

function create(req, res, next){
    res.send('Team create')
}

function list(req, res, next) {
    res.send('Teams list');
}

function index(req, res, next){
    res.send('Team index')
}

function replace(req, res, next){
    res.send('Team replace')
}

function update(req, res, next){
    res.send('Team update')
}

function destroy(req, res, next){
    res.send('Team destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};