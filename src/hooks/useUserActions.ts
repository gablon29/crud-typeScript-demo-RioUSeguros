import { UserId, addNewUsers, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const newUsers = ({ name, email, age, gitHub }) => {
		dispatch(addNewUsers({ name, email, age, gitHub }));
	};
	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};
	return { newUsers, removeUser };
};
