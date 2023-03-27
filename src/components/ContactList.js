import { useSelector } from "react-redux";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const allContacts = useSelector((state) => state.contacts);
  return (
    <div className="contactList">
      <h2>All Contacts</h2>
      {allContacts.length > 0 &&
        allContacts.map((item, i) => (
          <ContactCard key={i} contactDetail={item} />
        ))}
    </div>
  );
};

export default ContactList;
