import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Bet, BetStatus, FilterStatus } from "@/types";

export interface BetsState {
  bets: Bet[];
  filter: FilterStatus;
}

const initialState: BetsState = {
  bets: [],
  filter: "All",
};

export const betSlice = createSlice({
  name: "bet",
  initialState,
  reducers: {
    setBets: (state, action: PayloadAction<Bet[]>) => {
      state.bets = action.payload;
    },
    updateBetStatus: (
      state,
      action: PayloadAction<{ id: string; status: BetStatus }>
    ) => {
      const { id, status } = action.payload;
      const bet = state.bets.find((bet) => bet.id === id);
      if (bet) {
        bet.status = status;
      }
    },
    setFilter: (state, action: PayloadAction<BetStatus | "All">) => {
      state.filter = action.payload;
    },
  },
});

export const { setBets, updateBetStatus, setFilter } = betSlice.actions;

export default betSlice.reducer;
