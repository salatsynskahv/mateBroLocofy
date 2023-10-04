import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SizeLargeColorWarningSta from "../components/SizeLargeColorWarningSta";
import "./HotelActivitiesBoatTour.css";
const HotelActivitiesBoatTour = () => {
  const navigate = useNavigate();

  const onReadMoreTextClick = useCallback(() => {
    navigate("/hotel-activities-boat-tour-expanded");
  }, [navigate]);

  return (
    <div className="hotel-activities-boat-tour">
      <b className="prague">Prague</b>
      <div className="welcome-to">Welcome to</div>
      <img className="image-4-icon" alt="" src="/image-4@2x.png" />
      <img
        className="chevronleftfilled-icon2"
        alt=""
        src="/chevronleftfilled1.png"
      />
      <b className="best-of-prague1">Best of Prague - Boat Tours</b>
      <b className="summary">Summary</b>
      <div className="image-7-parent">
        <img className="image-7-icon" alt="" src="/image-7@2x.png" />
        <img className="image-8-icon" alt="" src="/image-8@2x.png" />
        <img className="image-7-icon" alt="" src="/image-9@2x.png" />
        <img className="image-8-icon" alt="" src="/image-10@2x.png" />
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-con-parent">
        <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet consectetur. Ut convallis ante netus accumsan. At condimentum in nunc ut vitae. `}</div>
        <div className="read-more" onClick={onReadMoreTextClick}>
          Read More
        </div>
        <div className="us2">81,81 US$</div>
        <div className="from">From</div>
      </div>
      <b className="overview">OverView</b>
      <div className="hours-approx-parent">
        <div className="hours-approx">6 Hours (approx.)</div>
        <div className="clock">􀐫</div>
      </div>
      <div className="next-available-tomorrow-parent">
        <div className="hours-approx">Next Available: Tomorrow</div>
        <div className="calendar2">􀉉</div>
      </div>
      <div className="instant-confirmation-parent">
        <div className="hours-approx">Instant Confirmation</div>
        <div className="checkmarkseal">􀇺</div>
      </div>
      <div className="email-ticket-parent">
        <div className="email-ticket">Email Ticket</div>
        <div className="ticket">􀪃</div>
      </div>
      <div className="free-cancellation-parent">
        <div className="email-ticket">Free Cancellation</div>
        <div className="dollarsignarrowcirclepath">􁎣</div>
      </div>
      <div className="group-size-25-parent">
        <div className="email-ticket">Group Size: 25</div>
        <div className="globe">􀝊</div>
      </div>
      <div className="available-in-english-parent">
        <div className="email-ticket">Available in English</div>
        <div className="globe">􀆪</div>
      </div>
      <SizeLargeColorWarningSta
        dimensionLabel="/masked-icon6.png"
        label="Check Availability"
        productCode="/masked-icon7.png"
        startIcon={false}
        endIcon={false}
        sizeLargeColorWarningStaPosition="absolute"
        sizeLargeColorWarningStaTop="1026px"
        sizeLargeColorWarningStaLeft="32px"
        sizeLargeColorWarningStaWidth="329px"
        sizeLargeColorWarningStaHeight="unset"
      />
    </div>
  );
};

export default HotelActivitiesBoatTour;
