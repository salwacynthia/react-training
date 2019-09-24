import React, { Component } from 'react';
import Idcard from './IdCard'
import Greetings from './Greetings'
import Random from './Random'


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
 <Random  value = "0,6"> </Random>

 </div>
);
  }
}

export default App;
