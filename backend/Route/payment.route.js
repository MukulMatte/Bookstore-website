import express from "express";
import { payment } from "../Controller/payment.controller.js";

const router = express.Router();

router.post('/payment', payment);

export default router;