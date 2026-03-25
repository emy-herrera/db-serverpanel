import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.jsx';

function App() {
	document.title = CRA_CONFIG.APP_TITLE;
	return (
		<BrowserRouter basename={`/${CRA_CONFIG.APP_NAME}`}>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
