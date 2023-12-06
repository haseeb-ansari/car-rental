import { FaArrowRightLong } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Blogsidebar = () => {
	return (
		<>
			<div className="blogs-single-conatiner">
				<h3>Category</h3>
			</div>
			<div className="blog-info-links">
				<ul>
					<li>
						<NavLink to="/blogsingle">
							<FaArrowRightLong /> Car Rental
						</NavLink>
                        <span>(10)</span>
					</li>
					<li>
						<NavLink to="/blogsingle">
							<FaArrowRightLong /> New Cars Model
						</NavLink>
                        <span>(15)</span>
					</li>
					<li>
						<NavLink to="/blogsingle">
							<FaArrowRightLong />
							Car Rent Tips
						</NavLink>
                        <span>(30)</span>
					</li>
					<li>
						<NavLink to="/blogsingle">
							<FaArrowRightLong />
							How To Rent
						</NavLink>
                        <span>(20)</span>
					</li>
					<li>
						<NavLink to="/blogsingle">
							<FaArrowRightLong />
							Car Drive Tips
						</NavLink>
                        <span>(25)</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Blogsidebar;
