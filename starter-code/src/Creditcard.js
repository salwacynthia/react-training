import React from "react";

export default function CreditCard({
  type = "String",
  number = "String",
  expirationMonth = "Array",
  expirationYear = "Array",
  bank = "String",
  owner = "String",
  bgColor = "String",
  color = "String"
}) 
{
  const srcImage = type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";
  let cardStyle = {
    backgroundColor: bgColor,
    color:color,
  }
  return (
    <div className="CreditCard" style={cardStyle}>
      <img className="CreditCardType" src={srcImage} />
      <div className="CreditCardNumber">
        •••• •••• •••• {number.substr(12)}
      </div>
      <div className="CreditCardnum">
        <span className="CreditCardExp">
          Expires {expirationMonth}/{expirationYear}
        </span>
        <span className="CreditCardBank">{bank}</span>
      </div>
      <div className="CreditCardOwner">{owner}</div>
    </div>
  );
}