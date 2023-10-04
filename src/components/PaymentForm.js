import "./PaymentForm.css";
const PaymentForm = () => {
  return (
    <div className="frame-parent1">
      <div className="circle-parent">
        <div className="circle">􀀀</div>
        <div className="paypal">PayPal</div>
        <img className="paypal-icon" alt="" src="/paypal.png" />
      </div>
      <div className="circle-group">
        <div className="circle">􀀀</div>
        <div className="paypal">Google Pay</div>
        <img className="google-pay-icon" alt="" src="/google-pay.png" />
      </div>
      <div className="circle-container">
        <div className="circle">􀀀</div>
        <div className="credit-card">Credit Card</div>
        <div className="visa-parent">
          <img className="visa-icon" alt="" src="/visa.png" />
          <img className="visa-icon" alt="" src="/mastercard.png" />
          <img className="discover-icon" alt="" src="/discover.png" />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
