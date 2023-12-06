import { Link } from 'react-router-dom';
import FooterLogo from '../assets/beetellogo2.svg';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { RiArrowRightSFill } from 'react-icons/ri';
import { LiaTelegramPlane } from 'react-icons/lia';
import {
	BiLogoFacebook,
	BiLogoTwitter,
	BiLogoLinkedin,
	BiLogoYoutube,
} from 'react-icons/bi';

const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer-padding">
					<div className="container">
						<div className="grid-footer-column-two">
							<div className="footer-info">
								<div className="footer-logo">
									<Link to="/">
										<img src={FooterLogo} alt="Footerlogo" />
									</Link>
								</div>

								<p>
									We are many variations of passages available but the majority
									have suffered alteration in some form by injected humour words
									believable.
								</p>

								<div className="company-details">
									<ul>
										<li>
											<Link href="/">
												<span className="info-icon">
													<LiaPhoneVolumeSolid />
												</span>
												8130505609
											</Link>
										</li>
										<li>
											<Link href="/">
												<span className="info-icon">
													<IoLocationOutline />
												</span>
												okhla industrial
											</Link>
										</li>
										<li>
											<Link href="/">
												<span className="info-icon">
													<HiOutlineMail />
												</span>
												ansari.hasib99@gmail.com
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="grid-footer-column-three">
								<div className="quick-links">
									<h3 className="underline">Quick Links</h3>
									<ul>
										<li>
											<Link to="/about">
												<RiArrowRightSFill /> About Us
											</Link>
										</li>
										<li>
											<Link to="/">
												<RiArrowRightSFill /> Update News
											</Link>
										</li>
										<li>
											<Link to="/terms">
												<RiArrowRightSFill /> Terms Of Service
											</Link>
										</li>
										<li>
											<Link to="/policy">
												<RiArrowRightSFill /> Privacy policy
											</Link>
										</li>
										<li>
											<Link to="/">
												<RiArrowRightSFill /> Our Team
											</Link>
										</li>
									</ul>
								</div>

								<div className="quick-links">
									<h3 className="underline">Support Center</h3>
									<ul>
										<li>
											<Link to="/">
												<RiArrowRightSFill /> Help Center
											</Link>
										</li>
										<li>
											<Link to="/">
												<RiArrowRightSFill /> FAQ's
											</Link>
										</li>
										<li>
											<Link to="/">
												<RiArrowRightSFill /> Booking Tips
											</Link>
										</li>
										<li>
											<Link to="/">
												<RiArrowRightSFill /> Live Chat
											</Link>
										</li>
										<li>
											<Link to="/contact">
												<RiArrowRightSFill /> Contact Us
											</Link>
										</li>
									</ul>
								</div>

								<div className="newsletter">
									<h3 className="underline">Support Center</h3>
									<p>Subscribe Our Newsletter To Get Latest Update And News</p>

									<div className="news-letter">
										<input type="text" placeholder="your mail" />
										<button>
											Subscribe Now <LiaTelegramPlane />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="copy-rights">
					<div className="container">
						<div className="grid-copy-right-column-two">
							<p className="copyright-text">
								© Copyright <span id="date">2023</span>{' '}
								<Link> BEETEL CAR RENTAL </Link>
								All Rights Reserved.
							</p>
							<div className="footer-social-container">
								<ul className="footer-social">
									<li>
										<Link to="/">
											<BiLogoFacebook />
										</Link>
									</li>
									<li>
										<Link to="/">
											<BiLogoTwitter />
										</Link>
									</li>
									<li>
										<Link to="/">
											<BiLogoLinkedin />
										</Link>
									</li>
									<li>
										<Link to="/">
											<BiLogoYoutube />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
