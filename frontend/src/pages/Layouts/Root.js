import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../../components/MainNavigation';
import classes from './Root.module.css';

const RootPageLayout = () => {
	const navigation = useNavigation();
	return (
		<>
			<MainNavigation />
			<main className={classes.content}>
				{navigation.state === 'loading' && <p>Loading...</p>}
				<Outlet />
			</main>
		</>
	);
};
export default RootPageLayout;
