import React from "react";

/**
 * Renders a contact picker component.
 *
 * @param {array} contacts - The list of contacts to choose from.
 * @param {Function} onChange - The callback function to be called when the selected contact changes.
 * @param {string} value - The currently selected contact.
 * @param {string} name - The name of the input(concact).
 * @return {JSX.Element} The rendered contact picker component.
 */
export const ContactPicker = ({ contacts, onChange, value, name }) => {
	return (
		<>
			<select onChange={onChange} value={value} name={name}>
				<option value=""> No Contact Selected </option>
				{contacts.map((contact) => {
					return (
						<option key={contact.name} value={contact.name}>
							{contact.name}
						</option>
					);
				})}
			</select>
		</>
	);
};
