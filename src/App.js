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

	const addContactHandler = (
		newContactName,
		newContactPhone,
		newContactEmail
	) => {
		setContacts((prevContacts) => {
			return [
				...prevContacts,
				{
					"ContactName": newContactName,
					"ContactPhone": newContactPhone,
					"ContactEmail": newContactEmail,
				},
			];
		});
	};

	const addAppointmentHandler = (
		newApptName,
		newApptContact,
		newApptDate,
		newApptTime
	) => {
		setAppointments((prevAppts) => {
			return [
				...prevAppts,
				{
					"Apptname": newApptName,
					"ApptContact": newApptContact,
					"ApptDate": newApptDate,
					"ApptTime": newApptTime,
				},
			];
		});
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
