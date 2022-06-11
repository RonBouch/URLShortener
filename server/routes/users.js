import express from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js'

const router = express.Router();
//Get
router.get("/getUsers", getUsers);
router.get("/user/:id", getUser);

//POST
router.post("/addUser", createUser);

//DELETE
router.delete("/deleteUser/:id", deleteUser);

//PUT
router.put("/updateUser/:id", updateUser);


export default router;