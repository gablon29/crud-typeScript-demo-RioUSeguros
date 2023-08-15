import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";

export function CreateUsers() {
	const { newUser } = useUserActions();

	const handleSubmit = (event: React.FormEvent<HTMLFormEvent>) => {
		const form = event.target;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
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
