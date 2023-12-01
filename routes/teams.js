const express = require('express');
const router = express.Router();
const controller = require('../controllers/teams');
const authMiddleware = require('../authMiddleware');

router.post('/', authMiddleware('teams', 'CREATE'), controller.create);

router.get('/', authMiddleware('teams', 'READ'), controller.list);

router.get('/:id', authMiddleware('teams', 'READ'), controller.index);

router.put('/:id', authMiddleware('teams', 'UPDATE'), controller.replace);

router.patch('/:id', authMiddleware('teams', 'UPDATE'), controller.update);

router.delete('/:id', authMiddleware('teams', 'DELETE'), controller.destroy);

module.exports = router;