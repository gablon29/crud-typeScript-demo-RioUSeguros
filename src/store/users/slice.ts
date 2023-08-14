import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	age: string;
	gitHub: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = [
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

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default userSlice.reducer;
export const { deleteUserById } = userSlice.actions;
