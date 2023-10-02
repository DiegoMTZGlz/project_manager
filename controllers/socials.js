const express = require('express');

function create(req, res, next){
    res.send('Social create')
}

function list(req, res, next) {
    res.send('Socials list');
}

function index(req, res, next){
    res.send('Social index')
}

function replace(req, res, next){
    res.send('Social replace')
}

function update(req, res, next){
    res.send('Social update')
}

function destroy(req, res, next){
    res.send('Social destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};