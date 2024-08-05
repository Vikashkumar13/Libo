import express from "express";
import { getBook } from "../controller/book.controller.js";
//initalized router
const router = express.Router();

router.get("/", getBook); //get book route

export default router;