import AboutInner from '../components/AboutInner';
import BlogsCard from '../components/BlogsCard';
import ChooseUs from '../components/ChooseUs';
import FeatureCars from '../components/FeatureCars';
import Hero from '../components/Hero';
import HomeFaqs from '../components/HomeFaqs';
import OurUsp from '../components/OurUsp';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';

const Home = () => {
	return (
		<>
			<Hero />
			<OurUsp />
			<AboutInner />
			<FeatureCars />
			<Process />
			<ChooseUs />
			<HomeFaqs />
			<Testimonials />
			<BlogsCard />
		</>
	);
};

export default Home;
