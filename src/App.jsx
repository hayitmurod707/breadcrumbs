import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './Page';
const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='*' element={<Page />} />
		</Routes>
	</BrowserRouter>
);
export default App;
