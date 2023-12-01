const express = require('express');
const router = express.Router();
const controller = require('../controllers/storyCards');
const authMiddleware = require('../authMiddleware');

router.post('/', authMiddleware('storyCards', 'CREATE'), controller.create);

router.get('/', authMiddleware('storyCards', 'READ'), controller.list);

router.get('/:id', authMiddleware('storyCards', 'READ'), controller.index);

router.put('/:id', authMiddleware('storyCards', 'UPDATE'), controller.replace);

router.patch('/:id', authMiddleware('storyCards', 'UPDATE'), controller.update);

router.delete('/:id', authMiddleware('storyCards', 'DELETE'), controller.destroy);

module.exports = router;