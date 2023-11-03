import Navigation from "./Naviagtion";
import GoalForm from "./GoalForm";
import ContributionForm from "./ContributionForm";
import { useState } from "react";

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

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="row">
              <GoalForm
                formDataItems={goalFormData}
                setFormDataItems={setGoalFormData}
              />
            </div>
            <section>
              <div className="row pt-5 mt-5">
                <div className="col-12">
                  <ContributionForm
                    formDataItems={goalFormData}
                    setFormDataItems={setGoalFormData}
                    contributionData={contributionData}
                    setContributionData={setContributionData}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
