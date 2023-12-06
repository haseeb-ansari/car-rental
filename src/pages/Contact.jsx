import Innerbanner from '../components/Innerbanner';
import Image from '../assets/bgbanner.jpg';
import { Link } from 'react-router-dom';
import { conatactInfo } from '../data';
import Infocard from '../components/Infocard';
import ContactImg from '../assets/contactimg.jpg';
import { LiaTelegramPlane } from 'react-icons/lia';

const Contact = () => {
	return (
		<>
			<div>
				<Innerbanner image={Image} title="Contact Us">
					<div className="bread-cums">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>//</li>
							<li>Contact us</li>
						</ul>
					</div>
				</Innerbanner>

				<section className="section-padding information">
					<div className="container">
						<div className="grid-colum-four">
							{conatactInfo.map(({ id, icon, name, info }) => {
								return (
									<Infocard
										className="info-items"
										key={id}
										icon={icon}
										name={name}
										info={info}
									/>
								);
							})}
						</div>
					</div>
				</section>

				<section className="section-padding-bottom">
					<div className="container">
						<div className="contact-main-container">
							<div className="grid-colum-two">
								<div className="left-container">
									<div className="contact-img">
										<img src={ContactImg} alt="Contact Image" />
									</div>
								</div>
								<div className="right-container">
									<div className="contact-content">
										<h3>Get In Touch</h3>
										<p>
											It is a long established fact that a reader will be
											distracted by the readable content of a page randomised
											words which don't look even slightly when looking at its
											layout.
										</p>
										<div className="contact-form">
											<div className="form-box-1">
												<div className="input-box">
													<input
														id="name"
														type="text"
														className="input-fields"
														placeholder="Your Name"
													/>
												</div>

												<div className="input-box">
													<input
														id="email"
														type="email"
														className="input-fields"
														placeholder="Your Email"
													/>
												</div>
											</div>
											<div className="input-box">
												<input
													id="address"
													type="text"
													className="input-fields"
													placeholder="Your Subject"
												/>
											</div>
											<div className="input-box">
												<textarea
													name=""
													id=""
													cols="30"
													rows="10"
													className="input-fields"
													placeholder="Write Your Message"
												></textarea>
											</div>
											<button className="btn-forms">
												Send Message <LiaTelegramPlane />
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Contact;
