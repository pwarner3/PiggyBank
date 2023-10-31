import "./ProgressBar.css";

function ProgressBar() {
  const current = 5;
  const goal = 15;
  const percentage = (current / goal) * 100;

  return (
    <section>
      <div class="container">
        <div className="progress-bar">
          <div className="filler" style={{ width: `${percentage}%` }}>
            {`${percentage.toFixed(2)}%`}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressBar;
