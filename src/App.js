import './App.css';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectDetails from './projectDetails/ProjectDetails';
import Footer from './Footer/Footer';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}>
					</Route>
					<Route path='/details' element={<ProjectDetails />} />
				</Routes>
        <Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
