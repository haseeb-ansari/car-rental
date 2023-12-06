import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import { blogs } from '../data';

const BlogsCard = () => {
	return (
		<>
			<section className="section-padding-bottom hero-blog-sec">
				<div className="container">
					<div className="site-heading">
						<span className="site-title-tagline">OUR BLOG</span>
						<h2>
							Latest News & <span>Blog</span>
						</h2>
					</div>
					<div className="bolg-card-container">
						<div className="grid-colum-three">
							{blogs
								.slice(0, 3)
								.map(({ id, image, date, name, info, icon, icontwo }) => {
									return (
										<Card className="bolg-card" key={id}>
											<div className="bolg-card-img">
												<img src={image} alt={name} />
											</div>
											<div className="blog-customer-info">
												<p>
													{icon}
													{name}
												</p>
												<p>
													{icontwo}
													{date}
												</p>
											</div>
											<div className="bolg-card-content">
												<Link>{info}</Link>
											</div>
											<div className="bolg-card-brtn-link">
												<Link to="/blogsingle" className="btn-forms">
													Read More <FaArrowRightLong />
												</Link>
											</div>
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

export default BlogsCard;
