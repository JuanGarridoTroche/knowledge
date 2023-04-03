
import "./App.css";
import { LineChart } from "./components/LineChart";
import { BarChart } from "./components/BarChart";
import { SegmentChart } from "./components/SegmentChart";
import { SegmentChartGradient } from "./components/SegmentChartGradient";

function App() {
  return (
    <>
      <LineChart />
      <BarChart />
      <SegmentChart/>
      <SegmentChartGradient/>
    </>
  );
}

export default App;
