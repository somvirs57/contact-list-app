import { useSelector } from "react-redux";

const ContactData = (props) => {
  const contactState = useSelector((state) => state);
  return (
    <div>
      <h2>Contacts Data</h2>
      <table>
        <tbody>
          <tr>
            <th>Total Contacts:</th>
            <td>{contactState.totalContacts}</td>
          </tr>
          <tr>
            <th>Male Contacts:</th>
            <td>{contactState.maleCounter}</td>
          </tr>
          <tr>
            <th>Female Contacts:</th>
            <td>{contactState.femaleCounter}</td>
          </tr>
          <tr>
            <th>Business Contacts:</th>
            <td>{contactState.businessCounter}</td>
          </tr>
          <tr>
            <th>Personal Contacts:</th>
            <td>{contactState.personalCounter}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactData;
