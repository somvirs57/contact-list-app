import { useDispatch } from "react-redux";
import { contactActions } from "../store";
import { decreaseStateCounters } from "../Utility/utilityFunctions";

const ContactCard = (props) => {
  const dispatch = useDispatch();
  const { contactId, name, contactType, gender, email, mobile } =
    props.contactDetail;

  const updateContactHandler = () => {
    dispatch(contactActions.setUpdateRequired({ contactId }));
  };

  const deleteContactHandler = () => {
    dispatch(contactActions.deleteContact({ contactId }));
    decreaseStateCounters(dispatch, contactActions, contactType, gender);
  };
  return (
    <div>
      <div className="contactCardHead">
        <h3 className="contactNameHeading">{name}</h3>
        <span className="UpdateContactCard" onClick={updateContactHandler}>
          update
        </span>
        <span className="deleteContactCard" onClick={deleteContactHandler}>
          delete
        </span>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Contact Type:</th>
            <td>{contactType}</td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td>{gender}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Mobile:</th>
            <td>{mobile}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactCard;
