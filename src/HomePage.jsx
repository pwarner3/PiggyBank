import "./HomePage.css";

function HomePage() {
  const divStyle = {
    backgroundImage:
      'url("https://images.pexels.com/photos/9660/business-money-pink-coins.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="image-container">
      <img
        src="https://images.pexels.com/photos/9660/business-money-pink-coins.jpg"
        alt="Description of the image"
        style={{ width: "75%", height: "auto" }}
      />
      <div className="overlay-content">
        <h1>COIN CUBBY</h1>
        <h2>YOUR DIGITAL PIGGY BANK</h2>
      </div>
    </div>
  );
}

export default HomePage;
