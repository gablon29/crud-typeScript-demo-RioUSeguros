import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./users/slice";

const persistenMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		users: useReducer,
	},
	middleware: [persistenMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
