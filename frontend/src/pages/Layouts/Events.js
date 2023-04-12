import { Outlet } from 'react-router-dom';
import EventsNavigation from '../../components/EventsNavigation';
import classes from './Events.module.css';

const EventsRootPageLayout = () => {
	return (
		<div className={classes.content}>
			<EventsNavigation />
			<Outlet />
		</div>
	);
};

export default EventsRootPageLayout;
