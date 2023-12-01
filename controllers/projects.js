const express = require('express');
const Project = require('../models/project');
const Team = require('../models/team');
const Backlog = require('../models/backlog');
const User = require('../models/user');

async function create(req, res, next){
    let projectName = req.body.projectName;
    let projectRequestDate = req.body.projectRequestDate;
    let projectStartDate = req.body.projectStartDate;
    let projectDescription = req.body.projectDescription;
    const projectManagerId = req.body.projectManagerId;
    const productOwnerId = req.body.productOwnerId;
    const teamId = req.body.teamId;
    const productBacklogId = req.body.productBacklogId;
    const releaseBacklogId = req.body.releaseBacklogId;
    const sprintBacklogId = req.body.sprintBacklogId;
    
    let projectManager = await User.findOne({"_id":projectManagerId});
    let productOwner = await User.findOne({"_id":productOwnerId});
    let team = await Team.findOne({"_id":teamId});
    let productBacklog = await Backlog.findOne({"_id":productBacklogId});
    let releaseBacklog = await Backlog.findOne({"_id":releaseBacklogId});
    let sprintBacklog = await Backlog.findOne({"_id":sprintBacklogId});

    let project = new Project({
        projectName: projectName,
        projectRequestDate: projectRequestDate,
        projectStartDate: projectStartDate,
        projectDescription: projectDescription,
        projectManager: projectManager,
        productOwner: productOwner,
        team: team,
        productBacklog: productBacklog,
        releaseBacklog: releaseBacklog,
        sprintBacklog: sprintBacklog       
    });

    project.save().then(obj => res.status(200).json({
        msg: res.__('projects.create.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('projects.create.wrong'),
        obj: ex
    }));
}

function list(req, res, next) {
    let page = req.params.page? req.params.page :1;
    const options = {
        page: page,
        limit: 5
    };
    Project.paginate({},options).then(objs => res.status(200).json({
        msg: res.__('projects.list.ok'),
        obj: objs
    })).catch(ex => res.status(500).json({
        msg: res.__('projects.list.wrong'),
        obj: ex
    }));
}

function index(req, res, next){
    const id = req.params.id;
    Project.findOne({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('projects.index.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('projects.index.wrong')+`${id}`,
        obj: ex
    }));
}

async function replace(req, res, next){
    const id = req.params.id;
    let projectName = req.body.projectName ? req.body.projectName : "";
    let projectRequestDate = req.body.projectRequestDate ? req.body.projectRequestDate : "";
    let projectStartDate = req.body.projectStartDate ? req.body.projectStartDate : "";
    let projectDescription = req.body.projectDescription ? req.body.projectDescription : "";
    const projectManagerId = req.body.projectManagerId ? req.body.projectManagerId : "";
    const productOwnerId = req.body.productOwnerId ? req.body.productOwnerId : "";
    const teamId = req.body.teamId ? req.body.teamId : "";
    const productBacklogId = req.body.productBacklogId ? req.body.productBacklogId : "";
    const releaseBacklogId = req.body.releaseBacklogId ? req.body.releaseBacklogId : "";
    const sprintBacklogId = req.body.sprintBacklogId ? req.body.sprintBacklogId : "";
    
    let projectManager = await User.findOne({"_id":projectManagerId});
    let productOwner = await User.findOne({"_id":productOwnerId});
    let team = await Team.findOne({"_id":teamId});
    let productBacklog = await Backlog.findOne({"_id":productBacklogId});
    let releaseBacklog = await Backlog.findOne({"_id":releaseBacklogId});
    let sprintBacklog = await Backlog.findOne({"_id":sprintBacklogId});


    const project = new Object({
        _projectName: projectName,
        _projectRequestDate: projectRequestDate,
        _projectStartDate: projectStartDate,
        _projectDescription: projectDescription,
        _projectManager: projectManager,
        _productOwner: productOwner,
        _team: team,
        _productBacklog: productBacklog,
        _releaseBacklog: releaseBacklog,
        _sprintBacklog: sprintBacklog
    });

    Project.findOneAndUpdate({"_id":id}, project, {new: true}).then(obj => res.status(200).json({
        msg: res.__('projects.replace.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('projects.replace.wrong')+`${id}`,
        obj: ex
    }));
}

async function update(req, res, next){
    const id = req.params.id;

    let projectName = req.body.projectName;
    let projectRequestDate = req.body.projectRequestDate;
    let projectStartDate = req.body.projectStartDate;
    let projectDescription = req.body.projectDescription;
    const projectManagerId = req.body.projectManagerId;
    const productOwnerId = req.body.productOwnerId;
    const teamId = req.body.teamId;
    const productBacklogId = req.body.productBacklogId;
    const releaseBacklogId = req.body.releaseBacklogId;
    const sprintBacklogId = req.body.sprintBacklogId;
    
    let projectManager = await User.findOne({"_id":projectManagerId});
    let productOwner = await User.findOne({"_id":productOwnerId});
    let team = await Team.findOne({"_id":teamId});
    let productBacklog = await Backlog.findOne({"_id":productBacklogId});
    let releaseBacklog = await Backlog.findOne({"_id":releaseBacklogId});
    let sprintBacklog = await Backlog.findOne({"_id":sprintBacklogId});

    const project = new Object();
    if (projectName) project._projectName = projectName;
    if (projectRequestDate) project._projectRequestDate = projectRequestDate;
    if (projectStartDate) project._projectStartDate = projectStartDate;
    if (projectDescription) project._projectDescription = projectDescription;
    if (projectManager) project._projectManager = projectManager;
    if (productOwner) project._productOwner = productOwner;
    if (team) project._team = team;
    if (productBacklog) project._productBacklog = productBacklog;
    if (releaseBacklog) project._releaseBacklog = releaseBacklog;
    if (sprintBacklog) project._sprintBacklog = sprintBacklog;

    Project.findOneAndUpdate({"_id":id}, project).then(obj => res.status(200).json({
        msg: res.__('projects.update.ok'),
        obj: obj
    })).catch(ex => res.status(500).json({
        msg: res.__('projects.update.wrong')+`${id}`,
        obj: ex
    }));    
}

function destroy(req, res, next){
    const id = req.params.id;

    Project.findByIdAndDelete({"_id":id}).then(obj => res.status(200).json({
        msg: res.__('projects.destroy.ok')+`${id}`,
        obj: obj
    })).catch(ex => res.status(500).json({
        msg:  res.__('projects.destroy.wrong')+`${id}`,
        obj: ex
    }));
}

module.exports = {
    create, list, index, replace, update, destroy
};