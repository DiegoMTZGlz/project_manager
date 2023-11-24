const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Backlog', schema);