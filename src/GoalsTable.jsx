function GoalsTable(props) {
  return (
    <>
      <h3>Saving Goals</h3>
      <table className="table table-resposnive table-hover table-striped caption-top test">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item Name</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.formDataItems.map((item) => (
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

export default GoalsTable;
