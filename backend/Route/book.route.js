import express from "express";
import { getBook, getBookByTitle } from "../Controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/getbook", getBookByTitle);
export default router;