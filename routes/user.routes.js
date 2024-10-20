const { Router } = require('express');
const {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete,
} = require('../controllers/user.controller');

const router = Router();

router.get('/', userGet);
router.post('/', userPost);
router.put('/:userId', userPut);
router.patch('/', userPatch);
router.delete('/', userDelete);

module.exports = router;
