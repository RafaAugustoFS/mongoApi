const { Router } = require("express");
const UserController = require("../controllers/userController");

const router = Router();

router.get('/user', UserController.getAll);
router.post('/user', UserController.create);
router.delete('/user/:id', UserController.delete);
router.put('/user/:id', UserController.delete);
router.get('/user/:id', UserController.getOne);

module.exports = router;