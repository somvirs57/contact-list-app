import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  maleCounter: 0,
  femaleCounter: 0,
  businessCounter: 0,
  personalCounter: 0,
  totalContacts: 0,
  contactAddMode: true,
  contactUpdateMode: false,
  updateContactId: "",
};

const contactSlice = createSlice({
  name: "contactList",
  initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (item) => action.payload.contactId !== item.contactId
      );
    },
    setAdditionRequired(state, action) {
      state.contactUpdateMode = false;
      state.contactAddMode = true;
    },
    setUpdateRequired(state, action) {
      state.contactUpdateMode = true;
      state.contactAddMode = false;
      state.updateContactId = action.payload.contactId;
    },
    updateContact(state, action) {
      const contactToUpdate = state.contacts.find(
        (item) => item.contactId === action.payload.contactId
      );
      contactToUpdate.name = action.payload.name;
      contactToUpdate.gender = action.payload.gender;
      contactToUpdate.email = action.payload.email;
      contactToUpdate.mobile = action.payload.mobile;
    },
    increaseMaleCount(state) {
      state.maleCounter++;
    },
    decreaseMaleCount(state) {
      state.maleCounter--;
    },
    increaseFemaleCount(state) {
      state.femaleCounter++;
    },
    decreaseFemaleCount(state) {
      state.femaleCounter--;
    },
    increaseBusinessCount(state) {
      state.businessCounter++;
    },
    decreaseBusinessCount(state) {
      state.businessCounter--;
    },
    increasePersonalCounter(state) {
      state.personalCounter++;
    },
    decreasePersonalCounter(state) {
      state.personalCounter--;
    },
    increaseTotalCounter(state) {
      state.totalContacts++;
    },
    decreaseTotalCounter(state) {
      state.totalContacts--;
    },
  },
});

const store = configureStore({
  reducer: contactSlice.reducer,
});

export const contactActions = contactSlice.actions;

export default store;
