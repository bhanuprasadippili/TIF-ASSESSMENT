import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    jobTitle: String,
    jobDetails: String,
    jobLocation: String,
    jobPosition: String
}

const initialState: initialStateType = {
    jobTitle: "",
    jobDetails: "",
    jobLocation: "",
    jobPosition: ""
}

const jobDetailsSlice = createSlice({
    name: "Job Details",
    initialState,
    reducers: {
        addData: (state: initialStateType, action: PayloadAction<initialStateType>) => {
            state.jobTitle = action.payload.jobTitle;
            state.jobDetails = action.payload.jobDetails;
            state.jobLocation = action.payload.jobLocation;
            state.jobPosition = action.payload.jobPosition;
        }
    }

})

export const { addData } = jobDetailsSlice.actions;
export default jobDetailsSlice.reducer;