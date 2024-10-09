import moment from "moment/moment";
import React from "react";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0.5px;
  background-color: ${(props) => (props.$isHeader ? "#1e1f21" : "#4D4C4D")};
  ${(props) => props.$isHeader && "border-bottom: 1px solid #4D4C4D"}
`;

const CellWrapper = styled.div`
  min-height: ${(props) => (props.$isHeader ? 24 : 80)}px;
  min-width: 140px;
  color: ${(props) => (props.$isSelectedMonth ? "#dddcdd" : "#555759")};
  background-color: ${(props) => (props.$isWeekend ? "#272829" : "#1e1f21")};
`;

const RowInCell = styled.div`
  display: flex;
  justify-content: ${({ align }) => align || "flex-end"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
`;

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
`;

const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(275, 69, 69);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalendarGrid = ({ startDay, today }) => {
  const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());
  const isCurrentDay = (day) => moment().isSame(day, "day");
  const isSelectedMonth = (day) => today.isSame(day, "month");

  return (
    <>
      <GridWrapper $isHeader>
        {[...Array(7)].map((_, index) => (
          <CellWrapper key={index} $isHeader $isSelectedMonth>
            <RowInCell align={"flex-end"} pr={1}>
              {moment()
                .day(index + 1)
                .format("ddd")}
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>

      <GridWrapper>
        {daysArray.map((dayItem) => (
          <CellWrapper
            key={dayItem.unix()}
            $isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
            $isSelectedMonth={isSelectedMonth(dayItem)}
          >
            <RowInCell align={"flex-end"}>
              <DayWrapper>
                {!isCurrentDay(dayItem) && dayItem.format("D")}
                {isCurrentDay(dayItem) && (
                  <CurrentDay>{dayItem.format("D")}</CurrentDay>
                )}
              </DayWrapper>
            </RowInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </>
  );
};

export default CalendarGrid;
