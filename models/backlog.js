const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _storyCardList: [{
        type: mongoose.Schema.ObjectId,
        ref: 'StoryCard'
    }]
});

class Backlog {
    constructor(storyCardList) {
        this._storyCardList;
    }

    get storyCardList(){ return this._storyCardList; }
    set storyCardList(v) { this._storyCardList = v; }
}

schema.loadClass(Backlog);
module.exports = mongoose.model('Backlog', schema);