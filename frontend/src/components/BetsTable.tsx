import { useEffect } from "react";
import styled from "styled-components";

import Button from "@/components/Button";

import { api } from "@/utils/api";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  setBets,
  updateBetStatus,
  filteredBetsSelector,
} from "@/features/bet/betSlice";

const GridHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: #f2f2f2;
  padding: 10px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 10px;
  border-bottom: 1px solid #ddd;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;

const BetsTable = () => {
  const filteredBets = useAppSelector(filteredBetsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    api.get("api/bets").then((response) => {
      dispatch(setBets(response.data));
    });
  }, [dispatch]);

  const handleStatusChange = async (id: string, currentStatus: string) => {
    const newStatus =
      currentStatus === "Pending"
        ? "Won"
        : currentStatus === "Won"
        ? "Lost"
        : "Pending";

    const response = await api.put(`api/bets/${id}`, { status: newStatus });

    if (response.status >= 200 && response.status < 300) {
      dispatch(updateBetStatus({ id, status: newStatus }));
    }
  };

  return (
    <>
      <GridHeader>
        <div>Bet ID</div>
        <div>User ID</div>
        <div>Event Name</div>
        <div>Amount</div>
        <div>Status</div>
        <div>Actions</div>
      </GridHeader>
      {filteredBets.map((bet) => (
        <GridRow key={bet.id}>
          <div>{bet.id}</div>
          <div>{bet.userId}</div>
          <div>{bet.event}</div>
          <div>{bet.amount}</div>
          <div>{bet.status}</div>
          <div>
            <Button onClick={() => handleStatusChange(bet.id, bet.status)}>
              Change Status
            </Button>
          </div>
        </GridRow>
      ))}
    </>
  );
};

export default BetsTable;
