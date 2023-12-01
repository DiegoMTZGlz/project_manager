const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const schema = mongoose.Schema({
    _projectName: String,
    _projectRequestDate: Date,
    _projectStartDate: Date,
    _projectDescription: String,
    _projectManager: {
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    _projectOwner: {
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    _team: {
        type:mongoose.Schema.ObjectId,
        ref:'Team'
    },
    _productBacklog: {
        type:mongoose.Schema.ObjectId,
        ref:'Backlog'
    },
    _releaseBacklog: {
        type:mongoose.Schema.ObjectId,
        ref:'Backlog'
    },
    _sprintBacklog: {
        type:mongoose.Schema.ObjectId,
        ref:'Backlog'
    }
});

class Project {
    constructor(projectName, projectRequestDate, projectStartDate, projectDescription, projectManager, projectOwner, team, productBacklog, releaseBacklog, sprintBacklog){
        this._projectName = projectName;
        this._projectRequestDate = projectRequestDate;
        this._projectStartDate = projectStartDate;
        this._projectDescription = projectDescription;
        this._projectManager = projectManager;
        this._projectOwner = projectOwner;
        this._team = team;
        this._productBacklog = productBacklog;
        this._releaseBacklog = releaseBacklog;
        this._sprintBacklog = sprintBacklog;
    }

    get projectName(){ return this._projectName; }
    set projectName(v){ this._projectName = v; }

    get projectRequestDate(){ return this._projectRequestDate; }
    set projectRequestDate(v){ this._projectRequestDate = v; }

    get projectStartDate(){ return this._projectStartDate; }
    set projectStartDate(v){ this._projectStartDate = v; }

    get projectDescription(){ return this._projectDescription; }
    set projectDescription(v){ this._projectDescription = v; }

    get projectManager(){ return this._projectManager; }
    set projectManager(v){ this._projectManager = v; }

    get projectOwner(){ return this._projectOwner; }
    set projectOwner(v){ this._projectOwner = v; }

    get team(){ return this._team; }
    set team(v){ this._team = v; }
    
    get productBacklog(){ return this._productBacklog; }
    set productBacklog(v){ this._productBacklog = v; }

    get releaseBacklog(){ return this._releaseBacklog; }
    set releaseBacklog(v){ this._releaseBacklog = v; }

    get sprintBacklog(){ return this._sprintBacklog; }
    set sprintBacklog(v){ this._sprintBacklog = v; }
}

schema.loadClass(Project);
schema.plugin(mongoosePaginate);

module.exports = mongoose.model('Project', schema);