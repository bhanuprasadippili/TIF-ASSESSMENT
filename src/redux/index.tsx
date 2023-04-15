import { configureStore } from '@reduxjs/toolkit';
import requisitionDetails from './slices/requisitionDetails';
import jobDetails from './slices/jobDetails';
import interviewSetting from './slices/interviewSetting';
export const store = configureStore({
    reducer: {
        requisitionDetails,
        jobDetails,
        interviewSetting
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch