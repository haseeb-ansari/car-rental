import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

const Servicesidebar = () => {
	return (
		<>
			<div className="service-conatiner">
				<h3>All Services</h3>
			</div>
			<div className="service-info-links">
				<ul>
					<li>
						<NavLink to="/serviceinfo">
							<FaArrowRightLong /> Car Rental
						</NavLink>
					</li>
					<li>
						<NavLink to="/serviceinfo">
							<FaArrowRightLong /> Airport Transfer
						</NavLink>
					</li>
					<li>
						<NavLink to="/serviceinfo">
							<FaArrowRightLong />
							Wedding Ceremony
						</NavLink>
					</li>
					<li>
						<NavLink to="/serviceinfo">
							<FaArrowRightLong />
							Whole City Tour
						</NavLink>
					</li>
					<li>
						<NavLink to="/serviceinfo">
							<FaArrowRightLong />
							Hospital Transfer
						</NavLink>
					</li>
					<li>
						<NavLink to="/serviceinfo">
							<FaArrowRightLong />
							Baggage Transport
						</NavLink>
					</li>
					<li>
						<NavLink to="/serviceinfo">
							<FaArrowRightLong /> City Transfer
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Servicesidebar;
