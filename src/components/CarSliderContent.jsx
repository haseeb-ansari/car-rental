import { Link } from 'react-router-dom';
import { RiSteering2Line } from 'react-icons/ri';
import { GiRoad } from 'react-icons/gi';
import { LuFuel } from 'react-icons/lu';
import { IoCarSportOutline, IoPersonOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa6';
import { CiHeart } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';

const CarSliderContent = () => {
	return (
		<>
			<div>
				<div className="slider-content">
					<div className="car-details-content">
						<h2>Toyota Sports Car</h2>
						<div className="rating">
							<ul>
								<li>
									<FaStar />
								</li>
								<li>
									<FaStar />
								</li>
								<li>
									<FaStar />
								</li>
								<li>
									<FaStarHalfAlt />
								</li>
								<li>
									<FaRegStar />
								</li>
							</ul>

							<span>(4 Customer Reviews)</span>
						</div>
						<div className="car-slider-price">
							<div className="car-rent-container">
								<p className="car-product-price">
									<span>$390</span> <sub> /month</sub>
								</p>
								<div className="car-rent-box">
									<Link className="fav-icon">
										<CiHeart />
									</Link>
									<Link to="/carbooking" className="rent-link">Rent Now</Link>
								</div>
							</div>
						</div>
						<div className="car-usps">
                            <h3>Car Details</h3>
							<ul>
								<li>
									<span>
										<IoCarSportOutline /> Model: 2020
									</span>
								</li>
								<li>
									<span>
										<IoPersonOutline />4 People
									</span>
								</li>
								<li>
									<span>
										<LuFuel />
										Hybrid
									</span>
								</li>
								<li>
									<span>
										<GiRoad />
										10.15km / 1-litre
									</span>
								</li>
								<li>
									<span>
										<RiSteering2Line />
										Automatic
									</span>
								</li>
							</ul>
						</div>
						<div className="car-terms">
							<h3>Car Terms</h3>
							<ul>
								<li>
									<p>Rent Company:</p>
									<span>Toyota Company</span>
								</li>
								<li>
									<p>Transfer Fee:</p>
									<span>$20.00</span>
								</li>
								<li>
									<p>Disposition Fee:</p>
									<span>$25.00</span>
								</li>
							</ul>
						</div>
						<div className="car-share">
							<h3>Car Share</h3>
							<ul>
								<li>
									<Link>
										<FaFacebook />
									</Link>
								</li>
								<li>
									<Link>
										<FaTwitter />
									</Link>
								</li>
								<li>
									<Link>
										<FaLinkedinIn />
									</Link>
								</li>
								<li>
									<Link>
										<FaYoutube />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarSliderContent;
