const express = require('express');

function create(req, res, next){
    res.send('Role create')
}

function list(req, res, next) {
    res.send('Roles list');
}

function index(req, res, next){
    res.send('Role index')
}

function replace(req, res, next){
    res.send('Role replace')
}

function update(req, res, next){
    res.send('Role update')
}

function destroy(req, res, next){
    res.send('Role destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};