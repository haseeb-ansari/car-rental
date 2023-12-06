import { Link } from 'react-router-dom';
import Innerbanner from '../components/Innerbanner';
import Image from '../assets/bgbanner.jpg';
import LayoutWhite from '../components/LayoutWhite';
import Blogsidebar from './Blogsidebar';
import SearchBar from '../components/SearchBar';
import Recentpost from '../components/Recentpost';
import Follow from '../components/Follow';
import Populartag from '../components/Populartag';
import Blogpage from '../components/Blogpage';

const Blogsingle = () => {
	return (
		<>
			<Innerbanner image={Image} title="Blog Single">
				<div className="bread-cums">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>//</li>
						<li>Blog Single</li>
					</ul>
				</div>
			</Innerbanner>

			<section className="section blog-single">
				<div className="container">
					<div className="gird-colum-percent-two">
						<div className="blogs-content">
							<Blogpage />
						</div>
						<div className="blogs-Links">
							<LayoutWhite className="service-bg">
								<SearchBar />
							</LayoutWhite>
							<LayoutWhite className="service-bg mar-top">
								<Blogsidebar />
							</LayoutWhite>
							<LayoutWhite className="service-bg mar-top">
								<Recentpost />
							</LayoutWhite>
							<LayoutWhite className="service-bg mar-top">
								<Follow />
							</LayoutWhite>
							<LayoutWhite className="service-bg mar-top">
								<Populartag />
							</LayoutWhite>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Blogsingle;
