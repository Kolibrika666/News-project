import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import newsSlice from "../slice/news.slice";


const store = configureStore({
reducer : {
    startNews: newsSlice,
}
})

export default store;

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export const dispatch = useAppDispatch()