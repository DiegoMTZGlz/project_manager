const express = require('express');
const router = express.Router();
const controller = require('../controllers/projects');
const authMiddleware = require('../authMiddleware');

router.post('/', authMiddleware('projects', 'CREATE'), controller.create);

router.get('/', authMiddleware('projects', 'READ'), controller.list);

router.get('/:id', authMiddleware('projects', 'READ'), controller.index);

router.put('/:id', authMiddleware('projects', 'UPDATE'), controller.replace);

router.patch('/:id', authMiddleware('projects', 'UPDATE'), controller.update);

router.delete('/:id', authMiddleware('projects', 'DELETE'), controller.destroy);

module.exports = router;