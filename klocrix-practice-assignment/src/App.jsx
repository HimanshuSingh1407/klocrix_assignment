import { useState } from "react";
import "./styles.css";


function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleExpiryMonthChange = (event) => {
    setExpiryMonth(event.target.value);
  };

  const handleExpiryYearChange = (event) => {
    setExpiryYear(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handlePayButtonClick = () => {
    if (cardNumber && cardName && expiryMonth && expiryYear && cvv) {
      window.location.href = "otp.html";
    } else {
      alert("Please enter all details");
    }
  };

  return (
    <div id="credit-card-page">
      <div id="credit-image">
        <div id="card-type">
          <h1>VISA</h1>
        </div>
        <div id="card-number" style={{ fontSize: "1.5rem" }}>
          {cardNumber}
        </div>
        <div id="card-details">
          <div id="card-holder">
            <h3>CARD HOLDER</h3>
            <h3 id="card-name">{cardName}</h3>
          </div>
          <div id="card-expiry">
            <h3>Expiry</h3>
            <div style={{ display: "flex" }}>
              <h3 id="card-date">{expiryMonth}</h3>
              <h3 id="expiry-year">{expiryYear}</h3>
            </div>
          </div>
          <div id="card-cvv">
            <h3>CVV</h3>
            <h3 id="cvv-number">{cvv}</h3>
          </div>
        </div>
      </div>
      <div id="payment-details">
        <h2>Payment Details</h2>
        <form>
          <div className="details">
            <label htmlFor="name">CardHolderName</label>
            <input
              type="text"
              id="name"
              required
              value={cardName}
              onChange={handleCardNameChange}
            />
          </div>
          <div className="details">
            <label htmlFor="number">CardNumber</label>
            <input
              type="tel"
              pattern="[0-9\s]{16}"
              id="number"
              maxLength="16"
              required
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
          <div className="details">
            <label htmlFor="month">Expiry Month</label>
            <input
              type="number"
              id="month"
              required
              value={expiryMonth}
              onChange={handleExpiryMonthChange}
            />
          </div>
          <div className="details">
            <label htmlFor="year">Expiry Year</label>
            <input
              type="number"
              id="year"
              required
              value={expiryYear}
              onChange={handleExpiryYearChange}
            />
          </div>
          <div className="details">
            <label htmlFor="cvv">CVV</label>
            <input
              type="number"
              id="cvv"
              required
              value={cvv}
              onChange={handleCvvChange}
            />
          </div>
          <div className="details">
            <label htmlFor="amount">Payment amount</label>
            <input type="number" id="amount" required />
          </div>
          <div>
            <button id="btn-pay" type="button" onClick={handlePayButtonClick}>
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
