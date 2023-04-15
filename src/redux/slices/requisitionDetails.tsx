import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    gender: String,
    noOfOpenings: String,
    requisitionTitle: String,
    urgency: String
}

const initialState: initialStateType = {
    gender: "",
    noOfOpenings: "0",
    requisitionTitle: "",
    urgency: "0"
}

const requisitionDetailsSlice = createSlice({
    name: "Requisition Details",
    initialState,
    reducers: {
        addData: (state: initialStateType, action: PayloadAction<initialStateType>) => {
            state.gender = action.payload.gender;
            state.noOfOpenings = action.payload.noOfOpenings;
            state.requisitionTitle = action.payload.requisitionTitle;
            state.urgency = action.payload.urgency
        }
    }

})

export const { addData } = requisitionDetailsSlice.actions;
export default requisitionDetailsSlice.reducer;