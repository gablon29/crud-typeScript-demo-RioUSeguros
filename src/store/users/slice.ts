import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Gabriel Londero",
		email: "gabriellondero40@gmail.com",
		age: "28",
		gitHub: "gablon29",
	},
	{
		id: "2",
		name: "Lucas Londero",
		email: "lucaslondero@gmail.com",
		age: "31",
		gitHub: "lucasDev",
	},
	{
		id: "3",
		name: "Florencia Pacheco",
		email: "ritaflorenciap8@gmail.com",
		age: "28",
		gitHub: "florenciaFront",
	},
];

export interface User {
	name: string;
	email: string;
	age: string;
	gitHub: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	if (persistedState) return JSON.parse(persistedState).users;
	return DEFAULT_STATE;
})();

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUsers: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID(); //servicio de windows para acceder a servicion se criptografia
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default userSlice.reducer;
export const { addNewUsers, deleteUserById } = userSlice.actions;
