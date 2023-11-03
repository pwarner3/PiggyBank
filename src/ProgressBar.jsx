import "./ProgressBar.css";

function ProgressBar(props) {
  let contribution = 0;

  //for (let index = 0; index < props.filteredData; index++) {
  // contribution += props.filteredData[index].amountContributed;
  //}
  props.filteredData.forEach(
    (x) => (contribution += parseInt(x.amountContributed))
  );

  const goal = props.formDataItems.find(
    (item) => item.itemName === props.selectedGoal
  )?.amount;

  const percentage = (contribution / goal) * 100;

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
