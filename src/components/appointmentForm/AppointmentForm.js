import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
	const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
	return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

/**
 * Renders a form for adding appointments with input fields for title, date, time, and contact.
 * Calls the handleSubmit function on form submission.
 *
 * @param {array} contacts - The array of contacts to choose from.
 * @param {string} title - The title of the appointment.
 * @param {function} setTitle - The function to update the title state.
 * @param {string} contact - The selected contact for the appointment.
 * @param {function} setContact - The function to update the contact state.
 * @param {string} date - The date of the appointment.
 * @param {function} setDate - The function to update the date state.
 * @param {string} time - The time of the appointment.
 * @param {function} setTime - The function to update the time state.
 * @param {function} handleSubmit - The function to handle the form submission.
 * @return {JSX.Element} The form JSX element for adding appointments.
 */
export const AppointmentForm = ({
	contacts,
	title,
	setTitle,
	contact,
	setContact,
	date,
	setDate,
	time,
	setTime,
	handleSubmit,
}) => {
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				></input>
				<input
					type="date"
					placeholder="Date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
					min={getTodayString()}
				></input>
				<input
					type="time"
					placeholder="Time"
					value={time}
					onChange={(e) => setTime(e.target.value)}
				></input>
				<ContactPicker
					contacts={contacts}
					onChange={(e) => setContact(e.target.value)}
					value={contact}
					name="contact"
				/>
				<input type="submit" value="Add Appointment" />
			</form>
		</>
	);
};
