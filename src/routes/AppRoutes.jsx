// src/routes/routes.jsx
import { Routes, Route } from 'react-router-dom';
// import { Alert, AlertTitle } from '@mui/material';
// import { Box } from '@mui/system';
import { craUI } from '@sistemas-cra/react-components';
import Index from '../components/Index/Index.jsx';
import App1 from '../components/App1/App1.jsx';
import App2 from '../components/App2/App2.jsx';
// import FormAcuerdo from '../components/FormAcuerdo/FormAcuerdo.jsx';
// import ReportAcuerdos from '../components/ReportAcuerdos/ReportAcuerdos.jsx';
// import ReportAllAcuerdos from '../components/ReportAcuerdos/ReportAllAcuerdos.jsx';

const AppRoutes = () => (
	<Routes>
		<Route
			path='/'
			element={<Index />}
		/>
		<Route
			path='/app1'
			element={<App1 />}
		/>
		<Route
			path='/app2'
			element={<App2 />}
		/>
		<Route
			path={'/*'}
			element={<craUI.ErrorMsg>URL incorrecta</craUI.ErrorMsg>}
		/>
	</Routes>
);

export default AppRoutes;
