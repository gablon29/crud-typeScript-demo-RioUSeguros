import { Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import useReducer from "./users/slice";

const persistenMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
};
const syncWithDataBaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action;
		const previusState = store.getState() as RootState;
		next(action);
		try {
			if (type === "users/deleteUserById") {
				const userIdToRemove = payload;
				const userToRemove = previusState.users.find(
					(user) => user.id === userIdToRemove,
				);
				toast.success(`User ${userToRemove?.name} eliminated`);
			}
		} catch (error) {
			console.error(error);
		}
	};

export const store = configureStore({
	reducer: {
		users: useReducer,
	},
	middleware: [persistenMiddleware, syncWithDataBaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
