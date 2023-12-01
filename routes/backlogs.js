const express = require('express');
const router = express.Router();
const controller = require('../controllers/backlogs');
const authMiddleware = require('../authMiddleware');

router.post('/', authMiddleware('backlogs', 'CREATE'), controller.create);

router.get('/', authMiddleware('backlogs', 'READ'), controller.list);

router.get('/:id', authMiddleware('backlogs', 'READ'), controller.index);

router.put('/:id', authMiddleware('backlogs', 'UPDATE'), controller.replace);

router.patch('/:id', authMiddleware('backlogs', 'UPDATE'), controller.update);

router.delete('/:id', authMiddleware('backlogs', 'DELETE'), controller.destroy);

module.exports = router;