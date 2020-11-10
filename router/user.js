import express from 'express';
import { deleteUser, findById, findAll, update, create } from '../controller/userData';

const userRouter = express.Router();

userRouter.get('/', findAll);

userRouter.post('/create', create);

userRouter.get('/user/:id', findById);

userRouter.put('/update/:id', update);

userRouter.delete('/delete/:id', deleteUser);

export { userRouter }