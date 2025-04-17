import { Request, Response } from "express";
import { bets } from "../models/bet";
import { BetStatus } from "../types";

export const getBets = (req: Request, res: Response) => {
  res.json(bets);
};

export const updateBet = (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const validStatuses: BetStatus[] = ["Pending", "Won", "Lost"];

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  const bet = bets.find((b) => b.id === id);
  if (!bet) {
    return res.status(404).json({ message: "Bet not found" });
  }

  bet.status = status;
  return res.json(bet);
};
