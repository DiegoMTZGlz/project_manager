const express = require('express');

function create(req, res, next){
    res.send('User create')
}

function list(req, res, next) {
    res.send('Users list');
}

function index(req, res, next){
    res.send('User index')
}

function replace(req, res, next){
    res.send('User replace')
}

function update(req, res, next){
    res.send('User update')
}

function destroy(req, res, next){
    res.send('User destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};