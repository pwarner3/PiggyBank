function GoalForm() {
  return (
    <>
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Saving Goal Name
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="input-group">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Amount
            </label>
            <span className="input-group-text">$</span>
            <input
              type="number"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span className="input-group-text">.00</span>
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                First radio
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Second radio
              </label>
            </div>
          </div>
        </fieldset>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </>
  );
}

export default GoalForm;
