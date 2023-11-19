const mongoose = require('mongoose');

const socialEnum = ['FACEBOOK', 'GITHUB', 'GOOGLE'];

const schema = mongoose.Schema({
    _type:{
        type: String,
        enum: socialEnum
    },
    _usernameSocial: String
});

class Social {
    constructor(type, usernameSocial){
        this._type = type;
        this._usernameSocial = usernameSocial;
    }

    get type(){ return this._type; }
    set type(v){ this._type = v; }

    get usernameSocial(){ return this._usernameSocial; }
    set usernameSocial(v){ this._usernameSocial = v; }
}

schema.loadClass(Social);
module.exports = mongoose.model('Social', schema);