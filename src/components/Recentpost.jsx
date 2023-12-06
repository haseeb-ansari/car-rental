import { Link } from 'react-router-dom';
import { GoClock } from 'react-icons/go';
import Post1 from '../assets/posts1.jpg';
import Post2 from '../assets/posts2.jpg';
import Post3 from '../assets/posts3.jpg';

const Recentpost = () => {
	return (
		<>
			<div className="recent-posts-container">
				<div className="posts-conatiner">
					<h3>Recent Posts</h3>
				</div>
				<ul>
					<li>
						<div className="car-posts">
							<div className="posts-image">
								<img src={Post1} alt="" />
							</div>
							<div className="posts-content">
								<Link>It is a long established fact that a reader layout</Link>
								<p>
									<GoClock /> 17 March, 2023
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className="car-posts">
							<div className="posts-image">
								<img src={Post2} alt="" />
							</div>
							<div className="posts-content">
								<Link>It is a long established fact that a reader layout</Link>
								<p>
									<GoClock /> 17 March, 2023
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className="car-posts">
							<div className="posts-image">
								<img src={Post3} alt="" />
							</div>
							<div className="posts-content">
								<Link>It is a long established fact that a reader layout</Link>
								<p>
									<GoClock /> 17 March, 2023
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Recentpost;
