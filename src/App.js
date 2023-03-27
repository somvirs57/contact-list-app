import React, { useState } from "react";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import ContactListForm from "./components/ContactListForm";
import AddButtons from "./components/AddButtons";
import ContactList from "./components/ContactList";
import ContactData from "./components/ContactData";
import { contactTypes } from "./Utility/constants";

function App() {
  const [contactType, setContactType] = useState(contactTypes.PERSONAL);

  const contactTypeChangeHandler = (type) => {
    setContactType(type);
  };

  return (
    <Provider store={store}>
      <div className="app">
        <div className="contactDetails">
          <ContactList />
        </div>
        <div className="addContact">
          <div className="formContainer">
            <AddButtons
              contactType={contactType}
              contactTypeChangeHandler={contactTypeChangeHandler}
            />
            <ContactListForm contactType={contactType} />
          </div>
          <ContactData />
        </div>
      </div>
    </Provider>
  );
}

export default App;
