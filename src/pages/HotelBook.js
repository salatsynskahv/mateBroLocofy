import LastNameForm from "../components/LastNameForm";
import SizeLargeColorWarningSta from "../components/SizeLargeColorWarningSta";
import PaymentForm from "../components/PaymentForm";
import "./HotelBook.css";
const HotelBook = () => {
  return (
    <div className="hotel-book">
      <img
        className="chevronleftfilled-icon"
        alt=""
        src="/chevronleftfilled.png"
      />
      <div className="personal-information">Personal Information</div>
      <div className="we-will-use">
        We will use your email and phone number to deliver the tickets and send
        occasional inspiration and ideas for your future trips!
      </div>
      <LastNameForm />
      <div className="your-tickets-overview">Your tickets overview</div>
      <div className="payment">Payment</div>
      <div className="best-of-prague-boat-tours-parent">
        <div className="best-of-prague">Best of Prague: Boat Tours</div>
        <div className="sunday-sept-3">Sunday, Sept 3, 2023</div>
        <div className="calendar">􀉉</div>
        <div className="frame-child" />
        <div className="hour-pass-">1 hour pass - Adult (Age 15^)x1</div>
        <div className="us">81,81 US$</div>
      </div>
      <SizeLargeColorWarningSta
        dimensionLabel="/masked-icon2.png"
        label="submit"
        productCode="/masked-icon3.png"
        startIcon={false}
        endIcon={false}
        sizeLargeColorWarningStaPosition="absolute"
        sizeLargeColorWarningStaTop="758px"
        sizeLargeColorWarningStaLeft="22px"
        sizeLargeColorWarningStaWidth="346px"
        sizeLargeColorWarningStaHeight="60px"
      />
      <div className="hotel-book-child" />
      <PaymentForm />
    </div>
  );
};

export default HotelBook;
