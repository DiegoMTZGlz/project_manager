const mongoose = require('mongoose');

const skillLevelEnum = ['JUNIOR', 'SENIOR', 'MASTER'];

const schema = mongoose.Schema({
    _skillName: String,
    _skillLevel:{
        type: String,
        enum: skillLevelEnum
    }
});

class Skill {
    constructor(skillName, skillLevel){
        this._skillName = skillName;
        this._skillLevel = skillLevel;
    }

    get skillName(){ return this._skillName; }
    set skillName(v){ this._skillName = v; }

    get skillLevel(){ return this._skillLevel; }
    set skillLevel(v){ this._skillLevel = v; }
}

schema.loadClass(Skill);
module.exports = mongoose.model('Skill', schema);