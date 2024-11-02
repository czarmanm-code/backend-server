const { Router } = require('express');
const { check } = require('express-validator');

const {
    fieldsValidation,
} = require('../middlewares/fields-validation.middleware');
const {
    isAValidRole,
    existsEmail,
    existsUserById,
} = require('../helpers/db-validators');
const {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete,
} = require('../controllers/user.controller');

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
        check('email', 'Email is not valid.').isEmail(),
        check('email', 'Provided email already exists.').custom(existsEmail),
        check('role').custom((role) => isAValidRole(role)),
        fieldsValidation,
    ],
    userPost
);
router.put(
    '/:userId',
    [
        check('userId', 'The user id provided is not valid.').isMongoId(),
        check('userId').custom(existsUserById),
        check('role').custom((role) => isAValidRole(role)),
        fieldsValidation,
    ],
    userPut
);
router.patch('/', userPatch);
router.delete(
    '/:userId',
    [
        check('userId', 'The user id provided is not valid.').isMongoId(),
        check('userId').custom(existsUserById),
        fieldsValidation,
    ],
    userDelete
);

module.exports = router;
