import { v4 as uuid } from 'uuid';

let users = [];

export const deleteUser = (req, res) => {
    users = users.slice().filter((user) => user.id !== req.params.id);
    res.send("User Deleted!");
}

export const getUsers = (req, res) => {
    res.send(users)
}

export const getUser = (req, res) => {
    const singleUser = users.filter((user) => user.id === req.params.id);
    res.send(singleUser);
}

export const createUser = (req, res) => {
    console.log("🚀 ~ file: users.js ~ line 11 ~ createUser ~ req", req)
    const user = req.body;
    users.push({ ...user, id: uuid() });
    res.send("User Added successfully");
}

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id !== req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.contact = req.body.contact;
    res.send("User Updated");
}