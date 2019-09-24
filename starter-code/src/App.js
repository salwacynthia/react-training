import React, { Component } from 'react';
import Idcard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'
import Boxcolor from './Boxcolor'
import CreditCard from './Creditcard'


class App extends Component {
  render() {
  return (
  <div className="App">
  <h1>IdCard</h1>
  {/* TODO: Use the IdCard component */}
  <Idcard 
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<Idcard 
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<h1>Greetings</h1>
 {/* TODO: Use the Greetings component */}
  <Greetings lang="de">Ludwig</Greetings>
  <Greetings lang="fr">François</Greetings>
  <Greetings lang="en">Erin</Greetings>

  <h1>Random Numbers</h1>
 <Random  min = {1} max = {6}/> 
 <Random  min = {1} max = {100}/> 

   <h1>BoxColor</h1>
 <Boxcolor r={255} g={0} b={0} />
 <Boxcolor r={128} g={255} b={0} />

 <h1>CreditCard</h1>
  <div className="row-container">
  <CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white"
  />
  <CreditCard
   type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
  />
  <CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Bank"
  owner="John reed"
  bgColor="#ddbb55"
  color="white"
   />
  </div>
 </div>
);
  }
}

export default App;
