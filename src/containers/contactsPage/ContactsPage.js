import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

/**
 * Renders the ContactsPage component.
 *
 * @param {Array} contacts - The array of contacts.
 * @param {Function} addContact - The function to add a contact.
 * @return {JSX.Element} The rendered ContactsPage component.
 */
export const ContactsPage = ({ contacts, addContact }) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [duplicateName, setDuplicateName] = useState(false);

	useEffect(() => {
		if (contacts.some((contact) => contact.name === name)) {
			setDuplicateName(true);
		} else {
			setDuplicateName(false);
		}
	}, [name, contacts]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (duplicateName) {
			alert(
				`Name already exists in contacts, please choose a different name and try again.`
			);
		} else {
			addContact(name, phone, email);
			setName("");
			setPhone("");
			setEmail("");
		}
	};

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList array={contacts} />
			</section>
		</div>
	);
};
