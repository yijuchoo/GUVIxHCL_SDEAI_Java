// 1) state, 2) AsyncThunk 3) Reducers
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// asyncThunk is responsible for API calls

export const fetchEmployees = createAsyncThunk(
  // action name - sliceName/actionName
  "employee/fetchEmployees",

  async () => {
    // API call
    const response = await fetch("https://dummyjson.com/users");

    // convert the JSON
    const data = await response.json();

    // returns the users
    return data.users;
  },
);

// initialState
const initialState = {
  // employee list
  employees: [],

  // loading
  loading: false,

  // error
  error: null,
};

// create the slice, create the state, reducer, actions
const employeeSlice = createSlice({
  // slice name
  name: "employee",
  // initial state
  initialState,

  // reducers
  reducers: {},

  // handles asyncThunk
  extraReducers: (builder) => {
    // api started
    builder.addCase(fetchEmployees.pending, (state) => {
      // start the loader
      state.loading = true;

      // clear previous error
      state.error = null;
    });

    // api success state
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      // stop loader
      state.loading = false;

      // save the employees, action.payload contains the API data
      state.employees = action.payload;
    });

    // API failed state
    builder.addCase(fetchEmployees.rejected, (state) => {
      // Stop loader
      state.loading = false;

      // save the error
      state.error = "Unable to fetch employees";
    });
  },
});

// export the reducer
export default employeeSlice.reducer;

// createAsyncThunk is used to perform asynchronous operations like API calls
// it automatically dispatches the pending, fulfilled and rejected actions
