import moment from "moment/moment";
import React from "react";
import styled from "styled-components";
import { MounthDayList } from "../MounthDayList";
import { CalendarGridHeader } from "../CalendarGridHeader";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0.5px;
  background-color: ${(props) => (props.$isHeader ? "#1e1f21" : "#4D4C4D")};
  ${(props) => props.$isHeader && "border-bottom: 1px solid #4D4C4D"}
`;

const CalendarGrid = ({
  startDay,
  today,
  totalDays,
  events,
  openFormHandler,
}) => {
  return (
    <>
      <GridWrapper $isHeader>
        <CalendarGridHeader />
      </GridWrapper>

      <GridWrapper>
        <MounthDayList
          totalDays={totalDays}
          openFormHandler={openFormHandler}
          events={events}
          startDay={startDay}
          today={today}
        />
      </GridWrapper>
    </>
  );
};

export default CalendarGrid;
