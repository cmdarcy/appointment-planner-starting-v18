import React, { useState } from "react";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
	const [contacts, setContacts] = useState([]);
	const [appointments, setAppointments] = useState([]);

	/**
	 * Adds a new contact to the list of contacts.
	 *
	 * @param {string} newContactName - The name of the new contact.
	 * @param {string} newContactPhone - The phone number of the new contact.
	 * @param {string} newContactEmail - The email address of the new contact.
	 * @return {void} This function does not return anything.
	 */
	const addContactHandler = (
		newContactName,
		newContactPhone,
		newContactEmail
	) => {
		setContacts([
			...contacts,
			{
				name: newContactName,
				ContactPhone: newContactPhone,
				ContactEmail: newContactEmail,
			},
		]);
	};

	/**
	 * Adds a new appointment to the list of appointments.
	 *
	 * @param {string} newApptName - The name of the new appointment.
	 * @param {string} newApptContact - The contact for the new appointment.
	 * @param {string} newApptDate - The date of the new appointment.
	 * @param {string} newApptTime - The time of the new appointment.
	 * @return {void} This function does not return anything.
	 */
	const addAppointmentHandler = (
		newApptName,
		newApptContact,
		newApptDate,
		newApptTime
	) => {
		setAppointments([
			...appointments,
			{
				name: newApptName,
				ApptContact: newApptContact,
				ApptDate: newApptDate,
				ApptTime: newApptTime,
			},
		]);
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
				<Route
					path={ROUTES.CONTACTS}
					element={
						<ContactsPage contacts={contacts} addContact={addContactHandler} />
					}
				/>
				<Route
					path={ROUTES.APPOINTMENTS}
					element={
						<AppointmentsPage
							appointments={appointments}
							contacts={contacts}
							addAppointment={addAppointmentHandler}
						/>
					}
				/>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
