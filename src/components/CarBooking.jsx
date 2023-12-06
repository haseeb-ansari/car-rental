import BookingSidebar from './BookingSidebar';
import BookingInfo from './BookingInfo';
import Image from '../assets/bgbanner.jpg';
import LayoutWhite from './LayoutWhite';
import Innerbanner from './Innerbanner';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CarBooking = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
	return (
		<>
			<div>
				<section>
					<Innerbanner image={Image} title="Car Booking">
						<div className="bread-cums">
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>//</li>
								<li>Car Booking</li>
							</ul>
						</div>
					</Innerbanner>
				</section>
				<section className="section">
					<div className="container">
						<div className="grid-colum-percent">
							<div className="car-details-fields">
								<LayoutWhite>
									<BookingSidebar />
								</LayoutWhite>
							</div>
							<div className="booking-select-fields">
								<LayoutWhite>
									<BookingInfo />
								</LayoutWhite>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default CarBooking;
