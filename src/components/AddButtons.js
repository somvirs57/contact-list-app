import { contactTypes } from "../Utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { contactActions } from "../store";

const AddButtons = (props) => {
  const { contactAddMode } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { contactType, contactTypeChangeHandler } = props;
  const personalContactAddButtonHandler = () => {
    contactTypeChangeHandler(contactTypes.PERSONAL);
    dispatch(contactActions.setAdditionRequired());
  };
  const businessContactAddButtonHandler = () => {
    contactTypeChangeHandler(contactTypes.BUSINESS);
    dispatch(contactActions.setAdditionRequired());
  };
  return (
    <div className="addButtons">
      <button
        className={
          contactAddMode && contactType === contactTypes.PERSONAL
            ? "buttonActive"
            : ""
        }
        onClick={personalContactAddButtonHandler}
      >
        Add Personal Contact
      </button>
      <button
        className={
          contactAddMode && contactType === contactTypes.BUSINESS
            ? "buttonActive"
            : ""
        }
        onClick={businessContactAddButtonHandler}
      >
        Add Business Contact
      </button>
    </div>
  );
};

export default AddButtons;
