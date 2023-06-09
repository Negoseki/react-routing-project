import EventsList from '../components/EventsList';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

function EventsPage() {
	const { events } = useLoaderData();

	return (
		<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
			<Await resolve={events}>
				{loadedEvents => <EventsList events={loadedEvents} />}
			</Await>
		</Suspense>
	);
}

export default EventsPage;

const loadEvents = async () => {
	const response = await fetch('http://localhost:8080/events');

	if (!response.ok) {
		// return { isError: true, message: 'Could not fetch events.' };
		// throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
		// 	status: 500
		// });
		return json({ message: 'Could not fetch events.' }, { status: 500 });
	}
	const data = await response.json();
	return data.events;
};

export const loader = () => {
	return defer({ events: loadEvents() });
};
