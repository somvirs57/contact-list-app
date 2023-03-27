import { genders, contactTypes } from "./constants";

export const generateRandomId = () => Math.floor(Math.random() * 1000 + 1);

export const increaseStateCounters = (
  dispatch,
  contactActions,
  contactType,
  gender
) => {
  dispatch(contactActions.increaseTotalCounter());

  // increase personal or business type count
  if (contactType === contactTypes.PERSONAL) {
    dispatch(contactActions.increasePersonalCounter());
  } else if (contactType === contactTypes.BUSINESS) {
    dispatch(contactActions.increaseBusinessCount());
  }

  // increase male or female count
  if (gender === genders.MALE) {
    dispatch(contactActions.increaseMaleCount());
  } else if (gender === genders.FEMALE) {
    dispatch(contactActions.increaseFemaleCount());
  }
};

export const decreaseStateCounters = (
  dispatch,
  contactActions,
  contactType,
  gender
) => {
  dispatch(contactActions.decreaseTotalCounter());

  // increase personal or business type count
  if (contactType === contactTypes.PERSONAL) {
    dispatch(contactActions.decreasePersonalCounter());
  } else if (contactType === contactTypes.BUSINESS) {
    dispatch(contactActions.decreaseBusinessCount());
  }

  // increase male or female count
  if (gender === genders.MALE) {
    dispatch(contactActions.decreaseMaleCount());
  } else if (gender === genders.FEMALE) {
    dispatch(contactActions.decreaseFemaleCount());
  }
};
