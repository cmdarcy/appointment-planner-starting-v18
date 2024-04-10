import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
	/*
  Define state variables for 
  contact info and duplicate check
  */
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [duplicateName, setDuplicateName] = useState(false);

	/* if contacts array contains name then set duplicate name to true
   useEffect(() => {
    if () { setDuplicateName(true)

    }
  }, []); */

	const handleSubmit = (e) => {
		e.preventDefault();
		/*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
	};

	/*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm
					name={name}
					phone={phone}
					email={email}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				<TileList contacts={contacts} />
			</section>
		</div>
	);
};
