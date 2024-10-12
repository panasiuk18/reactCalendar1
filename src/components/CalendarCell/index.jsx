import React from "react";
import { isCurrentDay, isSelectedMonth } from "../../helpers";
import styled from "styled-components";
import { CellWrapper, RowInCell } from "../../containers/StyledComponents";

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer;
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

const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const EventListWrapper = styled.ul`
  margin: unset;
  padding: 0;
  list-style: none;
`;
const EventListItemWrapper = styled.li`
  padding-left: 2px;
  padding-right: 2px;
  margin-bottom: 2px;
  display: flex;
`;

const EventItemWrapper = styled("button")`
  position: relative;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 114px;
  border: unset;
  color: #dddddd;
  cursor: pointer;
  margin: 0;
  padding: 0;
  text-align: left;
  background-color: #5d5f63;
  border: 1px solid #5d5f63;
  border-radius: 2px;
`;

export const CalendarCell = ({ dayItem, events, today, openFormHandler }) => (
  <CellWrapper
    key={dayItem.unix()}
    $isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
    $isSelectedMonth={isSelectedMonth(dayItem, today)}
  >
    <RowInCell align={"flex-end"}>
      <ShowDayWrapper>
        <DayWrapper
          onDoubleClick={() => openFormHandler("Create", null, dayItem)}
        >
          {isCurrentDay(dayItem) ? (
            <CurrentDay>{dayItem.format("D")}</CurrentDay>
          ) : (
            dayItem.format("D")
          )}
        </DayWrapper>
      </ShowDayWrapper>
      <EventListWrapper>
        {events.slice(0, 2).map((event) => (
          <EventListItemWrapper key={event.id}>
            <EventItemWrapper
              onDoubleClick={() => openFormHandler("Update", event)}
            >
              {event.title}
            </EventItemWrapper>
          </EventListItemWrapper>
        ))}
        {events.length > 2 ? (
          <EventListItemWrapper key="show more">
            <EventItemWrapper>show more...</EventItemWrapper>
          </EventListItemWrapper>
        ) : null}
      </EventListWrapper>
    </RowInCell>
  </CellWrapper>
);
