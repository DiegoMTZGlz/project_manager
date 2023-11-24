const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true},
    _role: String
});

class Role {
    constructor(role){
        this._role = role;
    }

    get role(){ return this._role; }
    set role(v){ this._role = v; }
}

schema.loadClass(Role);
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Role', schema);