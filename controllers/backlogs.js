const express = require('express');

function create(req, res, next){
    res.send('Backlog create')
}

function list(req, res, next) {
    res.send('Backlogs list');
}

function index(req, res, next){
    res.send('Backlog index')
}

function replace(req, res, next){
    res.send('Backlog replace')
}

function update(req, res, next){
    res.send('Backlog update')
}

function destroy(req, res, next){
    res.send('Backlog destroy')
}

module.exports = {
    create, list, index, replace, update, destroy
};