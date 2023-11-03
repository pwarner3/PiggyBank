import { useState } from "react";
import ContributionTable from "./ContributionTable";

function ContributionForm(props) {
  const [selectGoal, setSelectGoal] = useState("");
  // const [props.formDataItems, setprops.FormDataItems] = useState([
  //   { key: 1, itemName: "Deposit 1", amount: 25 },
  //   { key: 2, itemName: "Deposit 2", amount: 30 },
  //   { key: 3, itemName: "Deposit 3", amount: 10 },
  // ]);
  const [key, setKey] = useState(props.contributionData.length);

  //Lauren's code for progress bar
  const [totalContributions, setTotalContributions] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    //Lauren's code for progress bar
    const newContribution = parseFloat(event.target.inputAmount.value);
    setTotalContributions(totalContributions + newContribution);

    console.log(event.target.inputItemName.value);
    props.setContributionData([
      ...props.contributionData,
      {
        // Use the current size as ID (needed to iterate the list later)
        key: props.contributionData.length + 1,
        goalToward: event.target.inputItemName.value,
        amountContributed: event.target.inputAmount.value,
      },
    ]);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <div className="row mb-3">
          <div className="input-group align-items-center">
            <label htmlFor="inputItemName" className="col-3 col-form-label">
              Goal Item Name
            </label>
            <div className="dropdown">
              <button
                className="btn custom-btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select A Goal
              </button>
              <ul className="dropdown-menu">
                {props.formDataItems.map((item) => (
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
            <label htmlFor="inputAmount" className="col-3 col-form-label">
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

        <button type="submit" className="btn-icon-button">
          <img
            src="https://www.svgrepo.com/show/54081/piggy-bank-and-a-dollar-coin.svg" // Replace with the actual path to your SVG file
            alt="Piggy Bank"
            className="btn-icon"
          />
        </button>
      </form>
      <div className="row mt-5">
        <ContributionTable
          selectedGoal={selectGoal}
          keyItem={key}
          setKey={setKey}
          formDataItems={props.formDataItems}
          handleClick={handleClick}
          contributionData={props.contributionData}
          totalContributions={totalContributions}
        />
      </div>
    </>
  );
}

export default ContributionForm;
