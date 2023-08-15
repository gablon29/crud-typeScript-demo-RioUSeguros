import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";

export function CreateUsers() {
	const { newUsers } = useUserActions();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const age = formData.get("age") as string;
		const gitHub = formData.get("gitHub") as string;

		newUsers({ name, email, age, gitHub });
	};
	return (
		<Card style={{ margin: "16px" }}>
			<Title>Create new user</Title>
			<form onSubmit={handleSubmit} className="">
				<TextInput name="name" placeholder="Write your Name" />
				<TextInput name="email" placeholder="Write your Email" />
				<TextInput name="age" placeholder="Write your age" />
				<TextInput name="gitHub" placeholder="Write your userName of GitHub" />
				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Created your user
					</Button>
				</div>
			</form>
		</Card>
	);
}
