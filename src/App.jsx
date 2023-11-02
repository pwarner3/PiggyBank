import Navigation from "./Naviagtion";
import GoalForm from "./GoalForm";
import ProgressBar from "./ProgressBar";
import ContributionForm from "./ContributionForm";

function App() {
  return (
    <>
      <Navigation />

      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="row">
              <GoalForm />
            </div>
            <div className="row mt-5 pt-5">
              <ContributionForm />
            </div>
          </div>
        </div>
      </div>
      <ProgressBar />
    </>
  );
}

export default App;
