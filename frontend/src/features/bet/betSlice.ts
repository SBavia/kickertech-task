import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import type { Bet, BetStatus, FilterStatus } from "@/types";

export interface BetsState {
  bets: Bet[];
  activeFilter: FilterStatus;
}

const initialState: BetsState = {
  bets: [],
  activeFilter: "All",
};

export const betSlice = createSlice({
  name: "bets",
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
      state.activeFilter = action.payload;
    },
  },
});

export const filteredBetsSelector = createSelector(
  (state: RootState) => state.betReducer.bets,
  (state: RootState) => state.betReducer.activeFilter,
  (bets, activeFilter) => {
    if (activeFilter === "All") {
      return bets;
    }
    return bets.filter((bet) => bet.status === activeFilter);
  }
);

export const { setBets, updateBetStatus, setFilter } = betSlice.actions;

export default betSlice.reducer;
