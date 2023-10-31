import { useState } from "react";
import GoalsTable from "./GoalsTable";
import "./index.css";

function GoalForm() {
  const [formData, setFormData] = useState({ itemName: "", amount: null });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `The name you entered was: ${formData.itemName} and the amount of ${formData.amount}`
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Item Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              value={formData.itemName}
              onChange={(e) =>
                setFormData({ ...formData, itemName: e.target.value })
              }
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="input-group">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Amount
            </label>
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
            <span className="input-group-text">.00</span>
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          Add Goal
        </button>
      </form>
      <div className="row mt-5">
        <GoalsTable
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default GoalForm;
