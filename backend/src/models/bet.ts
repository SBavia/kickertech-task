import type { Bet } from "../types.js";

export let bets: Bet[] = [
  { id: "1", userId: "101", event: "Match A", amount: 50, status: "Pending" },
  { id: "2", userId: "102", event: "Match B", amount: 30, status: "Won" },
  { id: "3", userId: "103", event: "Match C", amount: 20, status: "Lost" },
];
