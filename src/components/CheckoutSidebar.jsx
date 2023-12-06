import CarBooking from '../assets/blogpage2.jpg';

const CheckoutSidebar = () => {
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
						<span>(for one months)</span>
					</p>
				</div>
				<div className="checkout-main-info-container">
					<div className="checkout-info-container">
						<h5>Car info</h5>
						<div className="check-box">
							<div className="checkout-car-info">
								<ul>
									<li>Car</li>
									<li>Rent Quantity</li>
									<li>People</li>
									<li>Driving Service</li>
								</ul>
							</div>
							<div className="checkout-car-about">
								<ul>
									<li>Toyota Sports</li>
									<li>1 Cars</li>
									<li>1 People</li>
									<li>Yes(Pay Extra $100)</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="checkout-info-container">
						<h5>Rent Date & Time</h5>
						<div className="check-box">
							<div className="checkout-car-info">
								<ul>
									<li>From</li>
									<li>to</li>
									<li>Duration</li>
								</ul>
							</div>
							<div className="checkout-car-about">
								<ul>
									<li>03-10-2023 | 12:30 AM</li>
									<li>03-15-2023 | 12:30 AM</li>
									<li>For 1 Months</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="checkout-info-container">
						<h5>Rent Location</h5>
						<div className="check-box">
							<div className="checkout-car-info">
								<ul>
									<li>Pick Up</li>
									<li>Drop Off</li>
								</ul>
							</div>
							<div className="checkout-car-about">
								<ul>
									<li>New York, USA</li>
									<li>New York, USA</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="checkout-info-container">
						<h5>Payment Summary</h5>
						<div className="check-box">
							<div className="checkout-car-info">
								<ul>
									<li>1x GPS</li>
									<li>Insurance Fee</li>
									<li>Transfer Fee</li>
									<li>Disposition Fee</li>
									<li>Driving Fee</li>
									<li>Tax Fee</li>
								</ul>
							</div>
							<div className="checkout-car-about">
								<ul>
									<li>$15.00</li>
									<li>$20.00</li>
									<li>$25.00</li>
									<li>$22.0</li>
									<li>$100.00</li>
									<li>10%</li>
								</ul>
							</div>
						</div>
						<div className="total-price">
							<div className="total-pay">Total pay</div>
							<div className="total-amount">$600.00</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckoutSidebar;
