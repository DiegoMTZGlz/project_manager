const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const socialsSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true},
    type: { type: String, enum: ['FACEBOOK', 'GITHUB', 'GOOGLE']},
    usernameSocial: String
});

const skillsSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true},
    skillName: String,
    skillLevel: { type: String, enum: ['JUNIOR', 'SENIOR', 'MASTER']}    
});

const schema = mongoose.Schema({
    _username: String,
    _password: String,
    _salt: String,
    _name: String,
    _lastName: String,
    _birthdate: Date,
    _curp: String,
    _rfc: String,
    _socials: [socialsSchema],
    _skills: [skillsSchema],
    _address: {
        street: String,
        number: String,
        colony: String,
        zipcode: Number,
        city: String,
        state: String,
        country: String
    },
    _roles: [{
            type: String
    }]
});

class User {
    constructor(username, password, salt, name, lastName, birthdate, curp, rfc, socials, skills, address, roles){
        this._username = username;
        this._password = password;
        this._salt = salt;
        this._name = name;
        this._lastName = lastName;
        this._birthdate = birthdate;
        this._curp = curp;
        this._rfc = rfc;
        this._socials = socials;
        this._skills = skills;
        this._address = address;
        this._roles = roles;
    }   

    get username(){ return this._username; }
    set username(v){ this._username = v; }

    get password(){ return this._password; }
    set password(v){ this._password = v; }

    get salt() { return this._salt; }
    set salt(v) { this._salt = v; }

    get name(){ return this._name; }
    set name(v){ this._name = v; }

    get lastName() { return this._lastName; } 
    set lastName(v) { this._lastName = v; }

    get birthdate() { return this._birthdate; } 
    set birthdate(v) { this._birthdate = v; }

    get curp() { return this._curp; } 
    set curp(v) { this._curp = v; }

    get rfc() { return this._rfc; } 
    set rfc(v) { this._rfc = v; }

    get socials() { return this._socials; } 
    set socials(v) { this._socials = v; }

    get skills() { return this._skills; } 
    set skills(v) { this._skills = v; }

    get address() { return this._address }
    set address(v) { this._address = v; }

    get roles() { return this._roles }
    set roles(v) { this._roles = v; }
}

schema.loadClass(User);
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', schema);