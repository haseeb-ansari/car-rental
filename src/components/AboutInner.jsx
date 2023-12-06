import { Link } from 'react-router-dom';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import About from '../assets/about1.jpg';
import Carrent from '../assets/about2.svg';
import Shape from '../assets/about3.png';

const AboutInner = () => {
	return (
		<>
			<section className="section about-section about-main-sec">
				<div className="container">
					<div className="grid-colum-two">
						<div className="about-image-main-container">
							<div className="about-image-container">
								<div className="about-image">
									<img src={About} alt="About" />
									<div className="about-shape-bg-image">
										<img src={Shape} alt="Shape" />
									</div>
									<div className="quality-service">
										<div className="qlty-image">
											<img src={Carrent} alt="" />
										</div>
										<p className="quality-service-content">
											30 Years Of Quality Service
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="about-main-content-container">
							<div className="about-content">
								<div className="site-heading">
									<span className="site-title-tagline">ABOUT US</span>
									<h2>
										We Provide Quality <span> Car Rental</span> Services
									</h2>
								</div>
								<div className="about-text">
									<p>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, by injected humour, or randomised words which don't
										look even slightly believable.
									</p>
									<ul>
										<li>
											<FaRegCheckCircle />
											At vero eos et accusamus et iusto odio
										</li>
										<li>
											<FaRegCheckCircle />
											Established fact that a reader will be distracted
										</li>
										<li>
											<FaRegCheckCircle />
											Sed ut perspiciatis unde omnis iste natus sit
										</li>
									</ul>

									<Link className="btn-forms">
										Discover More <FaArrowRight />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutInner;
