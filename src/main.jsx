import { createRoot } from 'react-dom/client';
//import Loading from './components/Loading/Loading.jsx';
import { craUI } from '@sistemas-cra/react-components';
import App from './App.jsx';
import '@sistemas-cra/react-components/dist/react-components.css';

const app = (
	<craUI.Main>
		<App />
	</craUI.Main>
);
createRoot(document.getElementById('root')).render(app);
