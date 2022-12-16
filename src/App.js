
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';

import ViewRoute from './components/layout/ViewRoute';
import './assets/Animations.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className='banner'></div>
			<Sidebar />
			<ViewRoute />
		</div>
	)
}

export default App;
