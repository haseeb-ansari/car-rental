import { Link } from 'react-router-dom';
import Car from '../assets/choose1.svg';
import Key from '../assets/choose2.svg';
import Driver from '../assets/choose3.svg';
import { IoPlay } from 'react-icons/io5';

const ChooseUs = () => {
	return (
		<>
			<section className="section-padding-bottom choose-us-section">
				<div className="choose-bg-color">
					<div className="container">
						<div className="grid-colum-two">
							<div className="chooseus-content">
								<div className="site-heading">
									<span className="site-title-tagline">WHY CHOOSE US</span>
									<h2>
										We Are Dedicated <span> To Provide</span> Quality Service
									</h2>
								</div>
								<p className="choose-us-para">
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its layout.
								</p>

								<div className="choose-us-points">
									<ul>
										<li>
											<div className="choose-points-image">
												<div className="points-image">
													<img src={Car} alt="Choose us points image" />
												</div>
											</div>
											<div className="choose-points-content">
												<h3>Best Quality Cars</h3>
												<p>
													There are many variations of passages of Lorem Ipsum
													available but the majority have suffered alteration.
												</p>
											</div>
										</li>
										<li>
											<div className="choose-points-image">
												<div className="points-image">
													<img src={Key} alt="Choose us points image" />
												</div>
											</div>
											<div className="choose-points-content">
												<h3>No Cancellation Fees</h3>
												<p>
													There are many variations of passages of Lorem Ipsum
													available but the majority have suffered alteration.
												</p>
											</div>
										</li>
										<li>
											<div className="choose-points-image">
												<div className="points-image">
													<img src={Driver} alt="Choose us points image" />
												</div>
											</div>
											<div className="choose-points-content">
												<h3>Personal Driver</h3>
												<p>
													There are many variations of passages of Lorem Ipsum
													available but the majority have suffered alteration.
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="chooseus-image">
								<div className="video-wrapper">
									<Link className="play-btn popup-youtube">
										<IoPlay />
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

export default ChooseUs;
