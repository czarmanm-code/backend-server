const { Router } = require('express');
const { check } = require('express-validator');
const {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete,
} = require('../controllers/user.controller');

const router = Router();

router.get('/', userGet);
router.post('/', [check('email', 'Email is not valid').isEmail()], userPost);
router.put('/:userId', userPut);
router.patch('/', userPatch);
router.delete('/', userDelete);

module.exports = router;
