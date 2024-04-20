import { useEffect, useState } from "react";
import "./App.css";
import HoldingAccordions from "./components/HoldingAccordian";
import axios from "axios";

function App() {
  const [holdingsData, setHoldingsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://canopy-frontend-task.vercel.app/api/holdings")
      .then((data) => {
        // console.log(data.data);
        setHoldingsData(groupData(data.data.payload));
      })
      .catch((error) => console.log(error));
  }, []);

  const groupData = (data) => {
    return Object.values(
      data.reduce((acc, current) => {
        acc[current.asset_class] = acc[current.asset_class] ?? [];
        acc[current.asset_class].push(current);
        return acc;
      }, {})
    );
  };

  return (
    <div className="App">
      <HoldingAccordions holdingsData={holdingsData} />
    </div>
  );
}

export default App;
