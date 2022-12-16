
import Navbar from './components/UI/Navbar';
import Sidebar from './components/UI/Sidebar';

import ViewRoute from './ViewRoute';
import './assets/Animations.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Sidebar />
			<ViewRoute />
		</div>
	)
}

export default App;
