import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    interviewMode: String,
    interviewDuration: String,
    interviewLanguage: String,
}

const initialState: initialStateType = {
    interviewMode: "",
    interviewDuration: "",
    interviewLanguage: "",
}

const interviewSettingSlice = createSlice({
    name: "Requisition Details",
    initialState,
    reducers: {
        addData: (state: initialStateType, action: PayloadAction<initialStateType>) => {
            state.interviewLanguage = action.payload.interviewLanguage;
            state.interviewDuration = action.payload.interviewDuration;
            state.interviewMode = action.payload.interviewMode;
        }
    }

})

export const { addData } = interviewSettingSlice.actions;
export default interviewSettingSlice.reducer;