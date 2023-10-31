import { useState } from "react";

function GoalsTable(props) {
  return (
    <>
      <h3>Saving Goals</h3>
      <table className="table table-resposnive table-hover table-striped caption-top test">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item Name</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Barbie Doll</td>
            <td>$25.00</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Toy Truck</td>
            <td>$30.00</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Silly String</td>
            <td>$10.00</td>
          </tr>
        </tbody>
      </table>
      <div>
        {props.formData.itemName} and {props.formData.amount}
      </div>
    </>
  );
}

export default GoalsTable;
