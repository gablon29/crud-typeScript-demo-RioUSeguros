import { Toaster } from "sonner";
import "./App.css";
import { CreateUsers } from "./components/CreateUser";
import ListUsers from "./components/ListaUsers";

function App() {
	return (
		<>
			<ListUsers />
			<CreateUsers />
			<Toaster richColors />
		</>
	);
}

export default App;
