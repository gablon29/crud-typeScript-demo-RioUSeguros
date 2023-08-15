import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

export function CreateUsers() {
	const { newUsers } = useUserActions();
	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult(null);
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const age = formData.get("age") as string;
		const gitHub = formData.get("gitHub") as string;
		if (!name || !email || !gitHub) {
			return setResult("ko");
		}
		newUsers({ name, email, age, gitHub });
		setResult("ok");
		form.reset();
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
					<span>
						{result === "ok" && (
							<Badge color="green">Operation Successfull</Badge>
						)}
						{result === "ko" && <Badge color="red">Some was wron</Badge>}
					</span>
				</div>
			</form>
		</Card>
	);
}
