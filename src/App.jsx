import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import moment from "moment";
import Header from "./components/Header";
import Monitor from "./components/Monitor";
import CalendarGrid from "./components/CalendarGrid";
import styled from "styled-components";

const ShadowWrapper = styled("div")`
  border-top: 1px solid #737374;
  border-left: 1px solid #464648;
  border-right: 1px solid #464648;
  border-bottom: 2px solid #464648;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px #1a1a1a, 0 8px 20px 6px #888;
  box-sizing: border-box;
`;

function App() {
  moment.updateLocale("en", { week: { dow: 1 } });
  // const today = moment();
  const [today, setToday] = useState(moment());
  const startDay = today.clone().startOf("month").startOf("week");

  // window.moment = moment;

  const prevHandler = () =>
    setToday((prev) => prev.clone().subtract(1, "month"));

  const todayHandler = () => setToday(moment());

  const nextHandler = () => setToday((prev) => prev.clone().add(1, "month"));

  return (
    <>
      <ShadowWrapper>
        <Header />
        <Monitor
          today={today}
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}
        />
        <CalendarGrid startDay={startDay} today={today} />
      </ShadowWrapper>
    </>
  );
}

export default App;
