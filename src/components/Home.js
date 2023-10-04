import SizeLargeColorWarningSta from "./SizeLargeColorWarningSta";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <img className="image-1-icon" alt="" src="/image-1@2x.png" />
      <div className="button-parent">
          <button className="home-buttons"> Activities </button>
          <button className="home-buttons"> Hotel Information</button>
      </div>
      <div className="welcome-to-prague-parent">
        <b className="welcome-to-prague">Welcome to Prague!</b>
        <div className="explore-our-hotels"> Explore our Hotels and Activities
        </div>
      </div>
    </div>
  );
};

export default Home;
