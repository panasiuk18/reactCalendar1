import moment from "moment/moment";

export const isCurrentDay = (day) => moment().isSame(day, "day");
export const isSelectedMonth = (day, today) => today.isSame(day, "month");
export const isDayContainCurrentEvent = (event, dayItem) =>
  event.date >= dayItem.startOf("day").format("X") &&
  event.date <= dayItem.endOf("day").format("X");
