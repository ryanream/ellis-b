import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Results from './pages/Results';

import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='spacer' />
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/resume' component={Resume} />
					<Route path='/contact' component={Contact} />
					<Route path='/results' component={Results} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
