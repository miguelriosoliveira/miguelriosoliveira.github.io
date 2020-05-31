import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './Routes';
import GlobalStyles from './styles';

const App: React.FC = () => (
	<>
		<GlobalStyles />
		<BrowserRouter>
			<Header />
			<Routes />
		</BrowserRouter>
	</>
);

export default App;