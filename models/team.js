const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _usernameList:[{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }]
});

class Team {
    constructor(usernameList){
        this._usernameList = usernameList;
    }

    get usernameList(){ return this._usernameList; }
    set usernameList(v){ this._usernameList = v; }
}

schema.loadClass(Team);
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Team', schema);