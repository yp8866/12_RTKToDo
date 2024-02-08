import { configureStore } from '@reduxjs/toolkit'
import {todoSlice} from "../features/ToDo/todoslice"

export const store= configureStore({
    reducer: todoSlice.reducer
});