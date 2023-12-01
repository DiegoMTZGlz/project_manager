const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true},
    _role: String,
    _permissions:[{
        resource:String,
        permissions:{type:[String]}
    }]

});

class Role {
    constructor(role, permissions){
        this._role = role;
        this._permissions = permissions;
    }

    get role(){ return this._role; }
    set role(v){ this._role = v; }

    get permissions(){ return this._permissions; }
    set permissions(v){this._permissions = v; }

}

schema.loadClass(Role);
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Role', schema);