export type BetStatus = "Pending" | "Won" | "Lost";

export type FilterStatus = BetStatus | "All";

export interface Bet {
  id: string;
  userId: string;
  event: string;
  amount: number;
  status: BetStatus;
}
