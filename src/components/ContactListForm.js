import React, { useState, useRef, useEffect } from "react";
import { genders } from "../Utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { contactActions } from "../store";
import {
  generateRandomId,
  increaseStateCounters,
} from "../Utility/utilityFunctions";

const ContactListForm = (props) => {
  const dispatch = useDispatch();
  const { contacts, contactUpdateMode, updateContactId } = useSelector(
    (state) => state
  );

  //generate id
  const newId = generateRandomId();

  const [contactId, setContactId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState(genders.MALE);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [formError, setFormError] = useState("");

  const nameRef = useRef();
  const genderRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  const { contactType } = props;

  useEffect(() => {
    if (contactUpdateMode) {
      const contactToUpdate = contacts.filter(
        (item) => item.contactId === updateContactId
      );
      setContactId(contactToUpdate[0].contactId);
      setName(contactToUpdate[0].name);
      setGender(contactToUpdate[0].gender);
      setEmail(contactToUpdate[0].email);
      setMobile(contactToUpdate[0].mobile);
    } else {
      setContactId("");
      setName("");
      setGender(genders.MALE);
      setEmail("");
      setMobile("");
    }
  }, [contactUpdateMode, updateContactId, contacts]);

  const nameChangeHandler = (e) => {
    setName(nameRef.current.value);
    setFormError("");
  };
  const genderChangeHandler = (e) => {
    setGender(genderRef.current.value);
    setFormError("");
  };
  const emailChangeHandler = (e) => {
    setEmail(emailRef.current.value);
    setFormError("");
  };
  const mobileChangeHandler = (e) => {
    setMobile(mobileRef.current.value);
    setFormError("");
  };

  const formValid = () => {
    if (name !== "" && gender !== "" && email !== "" && mobile !== "") {
      return true;
    } else {
      return false;
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (contactUpdateMode) {
      dispatch(
        contactActions.updateContact({
          contactId,
          name,
          contactType,
          gender,
          email,
          mobile,
        })
      );
      return;
    }

    console.log({ name, gender, email, mobile });

    if (!formValid()) {
      setFormError("check fields and try again");
      return;
    }
    dispatch(
      contactActions.addContact({
        contactId: newId,
        name,
        contactType,
        gender,
        email,
        mobile,
      })
    );
    increaseStateCounters(dispatch, contactActions, contactType, gender);
  };
  return (
    <form className="contactListForm" onSubmit={formSubmitHandler}>
      <h2>
        {contactUpdateMode ? "Updating" : "Adding"} {contactType} contact
      </h2>
      <input
        type="text"
        placeholder="Enter name"
        ref={nameRef}
        onChange={nameChangeHandler}
        value={name}
      />
      <select
        placeholder="Select gender"
        ref={genderRef}
        onChange={genderChangeHandler}
        value={gender}
      >
        <option value={genders.MALE}>Male</option>
        <option value={genders.FEMALE}>Female</option>
      </select>
      <input
        type="email"
        placeholder="Enter email"
        ref={emailRef}
        onChange={emailChangeHandler}
        value={email}
      />
      <input
        type="tel"
        placeholder="Enter mobile"
        ref={mobileRef}
        onChange={mobileChangeHandler}
        value={mobile}
      />
      {formError && <p className="formError">{formError}</p>}
      <input type="submit" value={contactUpdateMode ? "Update" : "Save"} />
    </form>
  );
};

export default ContactListForm;
