const express = require('express');

function create(req, res, next){
    res.send('User Role create')
}

function list(req, res, next) {
    res.send('User Roles list');
}

function index(req, res, next){
    res.send('User Role index')
}

function replace(req, res, next){
    res.send('User Role replace')
}

function update(req, res, next){
    res.send('User Role update')
}

function destroy(req, res, next){
    res.send('User Role destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};