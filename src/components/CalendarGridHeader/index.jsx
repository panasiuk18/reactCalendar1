import React from "react";
import moment from "moment";
import { CellWrapper, RowInCell } from "../../containers/StyledComponents";
export const CalendarGridHeader = () => {
  return (
    <>
      {[...Array(7)].map((_, index) => (
        <CellWrapper key={index} $isHeader $isSelectedMonth>
          <RowInCell align={"flex-end"} pr={1}>
            {moment()
              .day(index + 1)
              .format("ddd")}
          </RowInCell>
        </CellWrapper>
      ))}
    </>
  );
};

export default CalendarGridHeader;
