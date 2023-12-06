import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoCarSportOutline } from 'react-icons/io5';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdOutlineLocationOff } from 'react-icons/md';
import { MdOutlineDateRange } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';

const Hero = () => {
	return (
		<>
			<section className="section hero-sec hero-bg-image margin-top">
				<div className="container">
					<div className="hero-main-container">
						<div className="grid-column-hero">
							<div className="hero-main-content">
								<div className="hero-content-container">
									<div className="discount-content">50% OFF RESERVED NOW!</div>
									<h1>Quality Car Rent Service In Your City</h1>
									<p>
										There are many variations of passages orem psum available
										but the majority have suffered alteration in some form by
										injected humour or randomised words which don't look even
										making it look like readable slightly believable.
									</p>
									<div className="hero-btn-container">
										<Link className="btn-forms">
											About More <FaArrowRightLong />
										</Link>
										<Link className="btn-forms hero-btn">
											Learn More <FaArrowRightLong />
										</Link>
									</div>
								</div>
							</div>
							<div className="hero-form">
								<div className="hero-form-container">
									<div className="hero-title"><h2>Let's Find Your Perfect Car</h2></div>
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
														<input
															id="car-type"
															type="text"
															placeholder="00:00 AM"
														/>
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
														<input
															id="car-type"
															type="text"
															placeholder="00:00 AM"
														/>
														<span className="hero-input-icon">
															<IoMdTime />
														</span>
													</div>
												</div>
											</div>
										</div>

										<button className="btn-forms">Find Your car <FaArrowRightLong /></button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
