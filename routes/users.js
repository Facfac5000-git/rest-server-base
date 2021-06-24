const { Router } = require('express');
const router = Router();

const userController = require('../controllers/users');

router.get('/', userController.usersGet );
router.post('/', userController.usersPost );
router.put('/:id', userController.usersPut );
router.patch('/:id', userController.usersPatch );
router.delete('/:id', userController.usersDelete );

module.exports = router;