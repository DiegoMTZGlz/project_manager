const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _name: String,
    _priority: Number,
    _role: String,
    _size: Number,
    _functionality: String,
    _benefit: String,
    _context: String,
    _event:[{
        type: String
    }],
    _result:[{
        type: String
    }]
});

class StoryCard {
    constructor(name, priority, role, size, functionality, benefit, context, event, result){
        this._name = name;
        this._priority = priority;
        this._role = role;
        this._size = size;
        this._functionality = functionality;
        this._benefit = benefit;
        this._context = context;
        this._event = event;
        this._result = result;
    }

    get name(){ return this._name; }
    set name(v){ this._name = v; }

    get priority(){ return this._priority; }
    set priority(v){ this._priority = v; }

    get role(){ return this._role; }
    set role(v){ this._role = v; }

    get size(){ return this._size; }
    set size(v){ this._size = v; }

    get functionality(){ return this._functionality; }
    set functionality(v){ this._functionality = v; }

    get benefit(){ return this._benefit; }
    set benefit(v){ this._benefit = v; }

    get context(){ return this._context; }
    set context(v){ this._context = v; }

    get event(){ return this._event; }
    set event(v){ this._event = v; }

    get result(){ return this._result; }
    set result(v){ this._result = v; }
}

schema.loadClass(StoryCard);
module.exports = mongoose.model('StoryCard', schema);