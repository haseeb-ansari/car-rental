import { IoMdTime } from 'react-icons/io';
import CarBooking from '../assets/blogpage2.jpg';
import {
	MdOutlineDateRange,
	MdOutlineLocationOff,
	MdOutlineLocationOn,
} from 'react-icons/md';
import { IoCarSportOutline } from 'react-icons/io5';

const BookingSidebar = () => {
	return (
		<>
			<div>
				<div className="car-deatils-box">
					<h2>Booking Car</h2>
					<div className="car-booking-img">
						<img src={CarBooking} alt="booking image" />
					</div>
					<h3>Mercedes</h3>
					<p>
						$390
						<span>/month</span>
					</p>
				</div>
				<div className="booking-form-container">
					<form action="#">
						<div className="hero-form-box">
							<label htmlFor="car-type">Your Perfect Car</label>
							<div className="hero-input">
								<input
									id="car-type"
									type="text"
									placeholder="Type Car, Model, Brand"
								/>
								<span className="hero-input-icon">
									<IoCarSportOutline />
								</span>
							</div>
						</div>
						<div className="hero-form-box">
							<label htmlFor="pick-location">Pick Up Location</label>
							<div id="pick-location" className="hero-input">
								<input
									id="car-type"
									type="text"
									placeholder="Type City, Airport, Station"
								/>
								<span className="hero-input-icon">
									<MdOutlineLocationOn />
								</span>
							</div>
						</div>
						<div className="hero-form-box">
							<label htmlFor="drop-location">Drop Off Location</label>
							<div id="drop-location" className="hero-input">
								<input
									id="car-type"
									type="text"
									placeholder="Type City, Airport, Station"
								/>
								<span className="hero-input-icon">
									<MdOutlineLocationOff />
								</span>
							</div>
						</div>

						<div className="timing-box">
							<div className="grid-colum-two">
								<div className="hero-form-box">
									<label htmlFor="drop-location">Pick Up Date</label>
									<div id="drop-location" className="hero-input">
										<input
											id="car-type"
											type="text"
											placeholder="MM / DD / YY"
										/>
										<span className="hero-input-icon">
											<MdOutlineDateRange />
										</span>
									</div>
								</div>
								<div className="hero-form-box">
									<label htmlFor="drop-location">Pick Up Time</label>
									<div id="drop-location" className="hero-input">
										<input id="car-type" type="text" placeholder="00:00 AM" />
										<span className="hero-input-icon">
											<IoMdTime />
										</span>
									</div>
								</div>
								<div className="hero-form-box">
									<label htmlFor="drop-location">Drop Off Date</label>
									<div id="drop-location" className="hero-input">
										<input
											id="car-type"
											type="text"
											placeholder="MM / DD / YY"
										/>
										<span className="hero-input-icon">
											<MdOutlineDateRange />
										</span>
									</div>
								</div>
								<div className="hero-form-box">
									<label htmlFor="drop-location">Drop Off Time</label>
									<div id="drop-location" className="hero-input">
										<input id="car-type" type="text" placeholder="00:00 AM" />
										<span className="hero-input-icon">
											<IoMdTime />
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* <button className="btn-forms">Find Your car <FaArrowRightLong /></button> */}
					</form>
				</div>
			</div>
		</>
	);
};

export default BookingSidebar;
