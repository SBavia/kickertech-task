import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { setFilter } from "@/features/bet/betSlice";
import type { FilterStatus } from "@/types";
import type { RootState } from "@/store";

const Select = styled.select`
  margin-bottom: 20px;
  padding: 8px;
  font-size: 1rem;
  width: 100%;
  max-width: 200px;
`;

const DropdownFilter = () => {
  const statusFilter = useAppSelector(
    (state: RootState) => state.betReducer.activeFilter
  );
  const dispatch = useAppDispatch();

  return (
    <Select
      value={statusFilter}
      onChange={(e) => dispatch(setFilter(e.target.value as FilterStatus))}
    >
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="Won">Won</option>
      <option value="Lost">Lost</option>
    </Select>
  );
};

export default DropdownFilter;
