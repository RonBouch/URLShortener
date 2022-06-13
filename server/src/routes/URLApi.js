import express from 'express';
import { getURLs, addURL, deleteURL, getURL, setCount } from '../controllers/URLApi.js'

const router = express.Router();
//Get
router.get("/getURLs", getURLs);
router.get("/getURL/:url", getURL);

//POST
router.post("/addURL", addURL);
router.post("/setCount", setCount);

//DELETE
router.delete("/deleteURL/:url", deleteURL);


export default router;