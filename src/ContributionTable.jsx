import ProgressBar from "./ProgressBar";

function ContributionTable(props) {
  const filteredGoals = props.contributionData.filter(
    (x) => x.goalToward === props.selectedGoal
  );
  if (props.selectedGoal === "") {
    return (
      <>
        <h2 className="no-goal-selected">No Goal Selected</h2>
      </>
    );
  }
  return (
    <>
      <section>
        <div className="row">
          <div className="col-12">
            <ProgressBar
              filteredData={filteredGoals}
              formDataItems={props.formDataItems}
              totalContributions={props.totalContributions}
              selectedGoal={props.selectedGoal}
            />
          </div>
        </div>
      </section>

      <h3>Contributions for {props.selectedGoal}</h3>
      <table className="table table-resposnive table-hover table-striped caption-top">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item Name</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredGoals.map((item) => (
            <tr key={item.key}>
              <th scope="row">{item.key.toString()}</th>
              <td>{item.goalToward}</td>
              <td>${item.amountContributed}.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ContributionTable;
