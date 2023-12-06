import { Link } from 'react-router-dom';
import Innerbanner from '../components/Innerbanner';
import Image from '../assets/bgbanner.jpg';
import { services } from '../data';
import Card from '../UI/Card';
import { FaArrowRightLong } from 'react-icons/fa6';

const Services = () => {
	return (
		<>
			<Innerbanner image={Image} title="Services">
				<div className="bread-cums">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>//</li>
						<li>Services</li>
					</ul>
				</div>
			</Innerbanner>

			<section className="section service">
				<div className="container">
					<div className="site-heading">
						<span className="site-title-tagline">SERVICES</span>
						<h2>
							What We <span> Offer</span>
						</h2>
					</div>
					<div className="service-info-container ">
						<div className="grid-colum-three">
							{services.map(({ id, name, image, info }) => {
								return (
									<Card className="services-card" key={id}>
										<div className="services-card-image">
											<img src={image} alt="services-card-image" />
										</div>
										<div className="services-card-content">
											<h3 className="services-card-title">{name}</h3>
											<p className="services-card-info">{info}</p>
										</div>
										<div className="services-link"></div>
										<Link to="/serviceinfo" className="btn-forms">
											Read More <FaArrowRightLong />
										</Link>
									</Card>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
