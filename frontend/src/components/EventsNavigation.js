import classes from './EventsNavigation.module.css';
import { NavLink } from 'react-router-dom';
function EventsNavigation() {
	const linkActive = ({ isActive }) => (isActive ? classes.active : '');
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink to='/events' className={linkActive} end>
							All Events
						</NavLink>
					</li>
					<li>
						<NavLink to='/events/new' className={linkActive} end>
							New Event
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default EventsNavigation;
