import React from "react";

/**
 * Renders a contact form with input fields for name, phone, and email.
 *
 * @param {string} name - The name input value.
 * @param {function} setName - The function to update the name state.
 * @param {string} phone - The phone input value.
 * @param {function} setPhone - The function to update the phone state.
 * @param {string} email - The email input value.
 * @param {function} setEmail - The function to update the email state.
 * @param {function} handleSubmit - The function to handle form submission.
 * @return {JSX.Element} The form JSX element for submitting contact information.
 */
export const ContactForm = ({
	name,
	setName,
	phone,
	setPhone,
	email,
	setEmail,
	handleSubmit,
}) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				></input>
				<input
					type="tel"
					placeholder="Phone"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
					maxLength="10"
				></input>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
				></input>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};
