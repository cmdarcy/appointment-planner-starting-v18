import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
	const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
	return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

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
