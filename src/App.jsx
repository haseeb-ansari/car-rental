import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cars from './pages/Cars';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Forgotpassword from './components/Forgotpassword';
import Profile from './dashboard/Profile';
import Carlisting from './dashboard/Carlisting';
import Favorites from './dashboard/Favorites';
import Transactions from './dashboard/Transactions';
import Billing from './dashboard/Billing';
import Setting from './dashboard/Setting';
import Privacypolicy from './components/Privacypolicy';
import Trems from './components/Trems';
import ServicesInfo from './components/ServicesInfo';
import Blogsingle from './blogsingle/Blogsingle';
import Blogpage from './components/Blogpage';
import CarsDetails from './components/CarsDetails';
import CarBooking from './components/CarBooking';
import Checkout from './components/Checkout';
import ScrollTop from './components/ScrollTop';

const App = () => {
	return (
		<BrowserRouter>
			<ScrollTop>
				<Header />
				<Routes>
					<Route index="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/cars" element={<Cars />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/forgotpassword" element={<Forgotpassword />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/carlisting" element={<Carlisting />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="/transactions" element={<Transactions />} />
					<Route path="/billing" element={<Billing />} />
					<Route path="/setting" element={<Setting />} />
					<Route path="/policy" element={<Privacypolicy />} />
					<Route path="/terms" element={<Trems />} />
					<Route path="/serviceinfo" element={<ServicesInfo />} />
					<Route path="/blogsingle" element={<Blogsingle />} />
					<Route path="/blogpage" element={<Blogpage />} />
					<Route path="/carsdetails" element={<CarsDetails />} />
					<Route path="/carbooking" element={<CarBooking />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
				<Footer />
			</ScrollTop>
		</BrowserRouter>
	);
};

export default App;
