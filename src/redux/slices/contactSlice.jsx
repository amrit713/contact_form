import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
};

export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts = [...state.contacts, action.payload];
        },
    },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
