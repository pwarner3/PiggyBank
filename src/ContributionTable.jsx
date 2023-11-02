function ContributionTable(props) {
  const filteredGoals = props.formDataItems.filter(
    (x) => x.itemName === props.selectedGoal
  );
  if (props.selectedGoal === "") {
    return (
      <>
        <h2>No Goal Selected</h2>
      </>
    );
  }
  return (
    <>
      <h3>Goal Contributions for {props.selectedGoal}</h3>
      <table className="table table-resposnive table-hover table-striped caption-top">
        <thead className="table-success">
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
              <td>{item.itemName}</td>
              <td>${item.amount}.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ContributionTable;
