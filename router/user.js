const express = require('express')
const userController = require('../controller/userData');


const userRouter = express.Router();

userRouter.get('/', userController.findAll);

userRouter.post('/create', userController.create);

userRouter.get('/user/:id', userController.findById);

userRouter.put('/update/:id', userController.update);

userRouter.delete('/delete/:id', userController.delete);



module.exports = userRouter;