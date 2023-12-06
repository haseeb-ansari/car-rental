import { Link } from 'react-router-dom';
import Innerbanner from '../components/Innerbanner';
import Image from '../assets/bgbanner.jpg';
import AboutInner from '../components/AboutInner';
import Counter from '../components/Counter';
import FAQs from '../components/FAQs';
import Testimonials from '../components/Testimonials';
import BlogsCard from '../components/BlogsCard';


const About = () => {

	return (
		<>
			<div>
				<Innerbanner image={Image} title="About Us">
					<div className="bread-cums">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>//</li>
							<li>About Us</li>
						</ul>
					</div>
				</Innerbanner>

				<AboutInner />
				<Counter />
				<FAQs />
				<Testimonials />
				<BlogsCard />
			</div>
		</>
	);
};

export default About;
