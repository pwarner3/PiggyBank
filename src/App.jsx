import Navigation from "./Naviagtion";
import GoalForm from "./GoalForm";
import ContributionForm from "./ContributionForm";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

function App() {
  const [goalFormData, setGoalFormData] = useState([
    { key: 1, itemName: "Barbie Doll", amount: 25 },
    { key: 2, itemName: "Toy Truck", amount: 30 },
    { key: 3, itemName: "Silly String", amount: 10 },
  ]);
  const [contributionData, setContributionData] = useState([
    { key: 1, amountContributed: 5, goalToward: "Barbie Doll" },
    { key: 2, amountContributed: 2, goalToward: "Toy Truck" },
    { key: 3, amountContributed: 3, goalToward: "Silly String" },
  ]);
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/goals"
          element={
            <GoalForm
              formDataItems={goalFormData}
              setFormDataItems={setGoalFormData}
            />
          }
        />
        <Route
          path="/savings"
          element={
            <ContributionForm
              formDataItems={goalFormData}
              setFormDataItems={setGoalFormData}
              contributionData={contributionData}
              setContributionData={setContributionData}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
