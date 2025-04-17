import { Router } from "express";
import { getBets, updateBet } from "../controllers/bet";

const router = Router();

router.get("/", getBets);
router.put("/:id", updateBet as any);

export default router;
