import styled from "styled-components";

export const CellWrapper = styled.div`
  min-height: ${(props) => (props.$isHeader ? 24 : 94)}px;
  min-width: 140px;
  color: ${(props) => (props.$isSelectedMonth ? "#dddcdd" : "#555759")};
  background-color: ${(props) => (props.$isWeekend ? "#272829" : "#1e1f21")};
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ align }) => align || "flex-end"};
  ${(props) => props.pr && `padding-right: ${props.pr * 8}px`}
`;
