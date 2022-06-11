import express from 'express';
import { getURLs, addURL, deleteURL } from '../controllers/URLApi.js'

const router = express.Router();
//Get
router.get("/getURLs", getURLs);
// router.get("/user/:url", getURL);

//POST
router.post("/addURL", addURL);

//DELETE
router.delete("/deleteURL/:url", deleteURL);


export default router;