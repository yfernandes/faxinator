## Component to be tested

```typescript
import React from "react";

export interface Props {
	shouldRemember: boolean;
	onUsernameChange: (username: string) => void;
	onPasswordChange: (password: string) => void;
	onRememberChange: (remember: boolean) => void;
	onSubmit: (username: string, password: string, remember: boolean) => void;
}

function LoginForm(props: Props) {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [remember, setRemember] = React.useState(props.shouldRemember);

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setUsername(value);
		props.onUsernameChange(value);
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setPassword(value);
		props.onPasswordChange(value);
	};

	const handleRememberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		setRemember(checked);
		props.onRememberChange(checked);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		props.onSubmit(username, password, remember);
	};

	return (
		<form data-testid="login-form" onSubmit={handleSubmit}>
			<label htmlFor="username">Username:</label>
			<input
				data-testid="username"
				type="text"
				name="username"
				value={username}
				onChange={handleUsernameChange}
			/>

			<label htmlFor="password">Password:</label>
			<input
				data-testid="password"
				type="password"
				name="password"
				value={password}
				onChange={handlePasswordChange}
			/>

			<label>
				<input
					data-testid="remember"
					name="remember"
					type="checkbox"
					checked={remember}
					onChange={handleRememberChange}
				/>
				Remember me?
			</label>

			<button type="submit" data-testid="submit">
				Sign in
			</button>
		</form>
	);
}

export default LoginForm;
```

## Test

```typescript
import { render, fireEvent, waitForElement } from "@testing-library/react";

import LoginForm, { Props } from "../LoginForm";

function renderLoginForm(props: Partial<Props> = {}) {
	const defaultProps: Props = {
		onPasswordChange() {
			return;
		},
		onRememberChange() {
			return;
		},
		onUsernameChange() {
			return;
		},
		onSubmit() {
			return;
		},
		shouldRemember: true
	};
	return render(<LoginForm {...defaultProps} {...props} />);
}

describe("<LoginForm />", () => {
	test("should display a blank login form, with remember me checked by default", async () => {
		const { findByTestId } = renderLoginForm();

		const loginForm = await findByTestId("login-form");

		expect(loginForm).toHaveFormValues({
			username: "",
			password: "",
			remember: true
		});
	});

	test("should allow entering a username", async () => {
		const onUsernameChange = jest.fn();
		const { findByTestId, debug } = renderLoginForm({ onUsernameChange });
		const username = await findByTestId("username");

		fireEvent.change(username, { target: { value: "test" } });

		expect(onUsernameChange).toHaveBeenCalledWith("test");
	});

	test("should allow entering a password", async () => {
		const onPasswordChange = jest.fn();
		const { findByTestId } = renderLoginForm({ onPasswordChange });
		const username = await findByTestId("password");

		fireEvent.change(username, { target: { value: "password" } });

		expect(onPasswordChange).toHaveBeenCalledWith("password");
	});

	test("should allow toggling remember me", async () => {
		const onRememberChange = jest.fn();
		const { findByTestId } = renderLoginForm({
			onRememberChange,
			shouldRemember: false
		});
		const remember = await findByTestId("remember");

		fireEvent.click(remember);

		expect(onRememberChange).toHaveBeenCalledWith(true);

		fireEvent.click(remember);

		expect(onRememberChange).toHaveBeenCalledWith(false);
	});

	test("should submit the form with username, password, and remember", async () => {
		const onSubmit = jest.fn();
		const { findByTestId } = renderLoginForm({
			onSubmit,
			shouldRemember: false
		});
		const username = await findByTestId("username");
		const password = await findByTestId("password");
		const remember = await findByTestId("remember");
		const submit = await findByTestId("submit");

		fireEvent.change(username, { target: { value: "test" } });
		fireEvent.change(password, { target: { value: "password" } });
		fireEvent.click(remember);
		fireEvent.click(submit);

		expect(onSubmit).toHaveBeenCalledWith("test", "password", true);
	});
});
```

[How to test react components in typescript](https://www.pluralsight.com/guides/how-to-test-react-components-in-typescript)
