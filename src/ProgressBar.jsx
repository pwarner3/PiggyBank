import App from "./App";
import "./ProgressBar.css";

function ProgressBar(props) {
  let contribution = 0;

  //for (let index = 0; index < props.filteredData; index++) {
  // contribution += props.filteredData[index].amountContributed;
  //}
  props.filteredData.forEach(
    (x) => (contribution += parseInt(x.amountContributed))
  );
  const goal = props.formDataItems.filter(
    (x) => x.itemName == props.selectedGoal
  );
  //const totalGoalAmount = filteredData.reduce(
  //(total, goal) => total + goal.amount,
  // 0
  // );

  //console.log(props.formDataItems.amount);
  //check to see what the total Goal amount is
  console.log(contribution);
  console.log(parseInt(goal.amount));

  const percentage = (contribution / parseInt(goal.amount)) * 100;

  return (
    <section>
      <div className="container">
        <div className="progress-bar" style={{ backgroundColor: "#363636" }}>
          <div className="filler" style={{ width: `${percentage}%` }}>
            {`${percentage.toFixed(2)}%`}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressBar;
