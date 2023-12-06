import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookingInfo = () => {
	return (
		<>
			<section>
				<div className="booking-infocontainer">
					<h2>Booking Info</h2>
					<div className="grid-colum-two">
						<div className="booking-select-box">
							<label htmlFor="rent-duration">Car Rent Duration</label>
							<select id="rent-duration">
								<option value="Rent For">1 day</option>
								<option value="Rent For">5 days</option>
								<option value="Rent For">10 days</option>
								<option value="Rent For">15 days</option>
								<option value="Rent For">1 Month</option>
								<option value="Rent For">1 Month</option>
							</select>
						</div>
						<div className="booking-select-box">
							<label htmlFor="rent-duration">Car Rent Quantity</label>
							<select id="rent-duration">
								<option value="Rent For">1 Car</option>
								<option value="Rent For">2 Car</option>
								<option value="Rent For">3 Car</option>
								<option value="Rent For">4 Car</option>
								<option value="Rent For">5 Car</option>
							</select>
						</div>
						<div className="booking-select-box">
							<label htmlFor="rent-duration">Choose People</label>
							<select id="rent-duration">
								<option value="Rent For">1 People</option>
								<option value="Rent For">2 People</option>
								<option value="Rent For">3 People</option>
								<option value="Rent For">4 People</option>
							</select>
						</div>
						<div className="booking-select-box">
							<label htmlFor="rent-duration">Need Driving Service</label>
							<select id="rent-duration">
								<option value="Rent For">Yes ( pay extra $100)</option>
								<option value="Rent For">No</option>
							</select>
						</div>
                        <Link to="/checkout" className="btn-forms">Continue Booking <FaArrowRightLong /></Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default BookingInfo;
