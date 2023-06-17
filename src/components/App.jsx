import React from "react";
import  ReactDOM  from "react-dom";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
        {contacts.map((contact, index) => (
          <Card
          key={index}
          fName={contact.name}
          img={contact.imgURL}
          mobile={contact.phone}
          email={contact.email}
        />
        
        ))}
    </div>
  );
}

export default App;