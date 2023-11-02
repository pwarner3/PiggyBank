import { useState } from "react";
import GoalsTable from "./GoalsTable";
import "./index.css";

function GoalForm(props) {
  const [key, setKey] = useState(props.formDataItems.length);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.inputItemName.value);
    props.setFormDataItems([
      ...props.formDataItems,
      {
        // Use the current size as ID (needed to iterate the list later)
        key: props.formDataItems.length + 1,
        itemName: event.target.inputItemName.value,
        amount: event.target.inputAmount.value,
      },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputItemName" className="col-sm-2 col-form-label">
            Item Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputItemName" />
          </div>
        </div>
        <div className="row mb-4">
          <div className="input-group">
            <label htmlFor="inputAmount" className="col-sm-2 col-form-label">
              Amount
            </label>
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              id="inputAmount"
              aria-label="Amount (to the nearest dollar)"
            />
            <span className="input-group-text">.00</span>
          </div>
        </div>

        <input type="hidden" value={key} />

        <button type="submit" className="btn custom-btn">
          Add Goal
        </button>
      </form>
      <div className="row mt-5">
        <GoalsTable
          keyItem={key}
          setKey={setKey}
          formDataItems={props.formDataItems}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default GoalForm;
