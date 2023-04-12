import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';

const ErrorPage = () => {
	const error = useRouteError();
    console.log(error)
	let title = 'An error ocurred!';
	let message = 'Something went wrong';

	if (error.status === 500) {
		message = error.data.message;
	}

	if (error.status === 404) {
		title = 'Not found!';
		message = 'Could not find resource or page';
	}
	return <PageContent title={title}>{message}</PageContent>;
};
export default ErrorPage;
