import { useState } from "react";
import ContributionTable from "./ContributionTable";

function ContributionForm() {
  const [selectGoal, setSelectGoal] = useState("");
  const [formDataItems, setFormDataItems] = useState([
    { key: 1, itemName: "Deposit 1", amount: 25 },
    { key: 2, itemName: "Deposit 2", amount: 30 },
    { key: 3, itemName: "Deposit 3", amount: 10 },
  ]);
  const [key, setKey] = useState(formDataItems.length);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.inputItemName.value);
    setFormDataItems([
      ...formDataItems,
      {
        // Use the current size as ID (needed to iterate the list later)
        key: formDataItems.length + 1,
        itemName: event.target.inputItemName.value,
        amount: event.target.inputAmount.value,
      },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="input-group align-items-center">
            <label htmlFor="inputItemName" className="col-sm-2 col-form-label">
              Goal Item Name
            </label>
            <div className="dropdown py-2">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select A Goal
              </button>
              <ul className="dropdown-menu">
                {formDataItems.map((item) => (
                  <li key={item.key}>
                    <button
                      type="button"
                      className="dropdown-item"
                      value={item.itemName}
                      onClick={(e) => setSelectGoal(e.target.value)}
                    >
                      {item.itemName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ms-3 py-2">
              <input
                type="text"
                className="form-control"
                id="inputItemName"
                value={selectGoal}
                disabled
              />
            </div>
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

        <button type="submit" className="btn btn-dark">
          Add Contribution
        </button>
      </form>
      <div className="row mt-5">
        <ContributionTable
          keyItem={key}
          setKey={setKey}
          formDataItems={formDataItems}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default ContributionForm;
