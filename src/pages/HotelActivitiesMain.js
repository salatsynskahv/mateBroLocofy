import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BoatContainer from "../components/BoatContainer";
import "./HotelActivitiesMain.css";
const HotelActivitiesMain = () => {
  const navigate = useNavigate();

  const onBoatContainerClick = useCallback(() => {
    navigate("/hotel-activities-boat-tour");
  }, [navigate]);

  return (
    <div className="hotel-activities-main">
      <img className="image-3-icon" alt="" src="/image-3@2x.png" />
      <b className="prague2">Prague</b>
      <img
        className="chevronleftfilled-icon4"
        alt=""
        src="/chevronleftfilled2.png"
      />
      <div className="hotel-activities-main-inner">
        <div className="explore-parent">
          <div className="explore">Explore</div>
          <div className="explore">Tours</div>
          <div className="explore">Tickets</div>
          <div className="explore">Other</div>
        </div>
      </div>
      <div className="welcome-to2">Welcome to</div>
      <div className="boat-parent">
        <BoatContainer
          tourDescription="/image-41@2x.png"
          tourImageDimensions="Best of Prague - Boat Tours"
          onBoatContainerClick={onBoatContainerClick}
        />
        <BoatContainer
          tourDescription="/image-5@2x.png"
          tourImageDimensions="Best of Prague - Castle Tours"
          propCursor="unset"
          propHeight="56px"
          propTop="369px"
          propLeft="18px"
        />
        <BoatContainer
          tourDescription="/image-6@2x.png"
          tourImageDimensions="Best of Prague - Food Tours"
          propCursor="unset"
          propHeight="56px"
          propTop="366px"
          propLeft="18px"
        />
      </div>
      <div className="boat-group">
        <div className="boat" onClick={onBoatContainerClick}>
          <img className="image-4-icon2" alt="" src="/image-42@2x.png" />
          <div className="best-of-prague3">Best of Prague - Boat Tours</div>
          <div className="us3">81,81 US$</div>
          <div className="from1">From</div>
        </div>
        <div className="castle">
          <img className="image-5-icon" alt="" src="/image-51@2x.png" />
          <div className="best-of-prague4">Best of Prague - Castle Tours</div>
          <div className="us4">81,81 US$</div>
          <div className="from2">From</div>
        </div>
        <div className="castle">
          <img className="image-5-icon" alt="" src="/image-61@2x.png" />
          <div className="best-of-prague4">Best of Prague - Food Tours</div>
          <div className="us5">81,81 US$</div>
          <div className="from3">From</div>
        </div>
      </div>
      <div className="top-5-activities-wrapper">
        <b className="top-5-activities">Top 5 activities</b>
      </div>
    </div>
  );
};

export default HotelActivitiesMain;
