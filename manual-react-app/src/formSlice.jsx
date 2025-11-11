import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fields: { username: '', password: '', email: '' },
  submitted: /** @type {{ username: string; password: string; email: string; } | null} */ (null),
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = /** @type {{ name: 'username' | 'password' | 'email', value: string }} */ (action.payload);
      state.fields[name] = value;
    },
    submitForm: (state) => {
      state.submitted = { ...state.fields };
      state.fields = { username: '', password: '', email: '' };
    },
    resetForm: (state) => {
      state.fields = { username: '', password: '', email: '' };
      state.submitted = null;
    },
  },
});

export const { updateField, submitForm, resetForm } = formSlice.actions;
export default formSlice.reducer;