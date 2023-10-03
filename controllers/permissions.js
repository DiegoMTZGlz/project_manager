const express = require('express');

function create(req, res, next){
    res.send('Permission create')
}

function list(req, res, next) {
    res.send('Permissions list');
}

function index(req, res, next){
    res.send('Permission index')
}

function replace(req, res, next){
    res.send('Permission replace')
}

function update(req, res, next){
    res.send('Permission update')
}

function destroy(req, res, next){
    res.send('Permission destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};