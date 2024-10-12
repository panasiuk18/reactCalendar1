import React from "react";
import { CalendarCell } from "../CalendarCell";
import { isDayContainCurrentEvent } from "../../helpers";

export const MounthDayList = ({
  startDay,
  totalDays,
  events,
  openFormHandler,
  today,
}) => {
  const day = startDay.clone().subtract(1, "day");
  const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());

  return (
    <>
      {daysArray.map((dayItem) => (
        <CalendarCell
          key={dayItem.unix()} // Добавлено уникальное свойство key
          today={today}
          events={events.filter((event) =>
            isDayContainCurrentEvent(event, dayItem)
          )}
          openFormHandler={openFormHandler}
          dayItem={dayItem}
        />
      ))}
    </>
  );
};
