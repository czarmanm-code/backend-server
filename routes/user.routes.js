const { Router } = require('express');
const { check } = require('express-validator');
const {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete,
} = require('../controllers/user.controller');
const {
    fieldsValidation,
} = require('../middlewares/fields-validation.middleware');

const router = Router();

router.get('/', userGet);
router.post(
    '/',
    [
        check('name', 'The [name] field must not be empty.').not().isEmpty(),
        check(
            'password',
            'The [password] field must must contain more than 6 characters.'
        ).isLength({ min: 6 }),
        check('email', 'Email is not valid').isEmail(),
        check('role', 'Provided [role] is not valid.').isIn([
            'USER_ROLE',
            'ADMIN_ROLE',
        ]),
        fieldsValidation,
    ],
    userPost
);
router.put('/:userId', userPut);
router.patch('/', userPatch);
router.delete('/', userDelete);

module.exports = router;
