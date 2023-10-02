const express = require('express');

function create(req, res, next){
    res.send('Project create')
}

function list(req, res, next) {
    res.send('Projects list');
}

function index(req, res, next){
    res.send('Project index')
}

function replace(req, res, next){
    res.send('Project replace')
}

function update(req, res, next){
    res.send('Project update')
}

function destroy(req, res, next){
    res.send('Project destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};