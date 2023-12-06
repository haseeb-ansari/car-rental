import { Link } from "react-router-dom";
import Innerbanner from "./Innerbanner";
import Image from '../assets/bgbanner.jpg';
import CarSlider from "./CarSlider";
import Tabs from "./Tabs";
import SimilarProducts from "./SimilarProducts";
import { useEffect } from "react";


const CarsDetails = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
	return (
		<>
			<div>
				<Innerbanner image={Image} title="Cars Single">
					<div className="bread-cums">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>//</li>
							<li>Cars Single</li>
						</ul>
					</div>
				</Innerbanner>
                
                <CarSlider/>
                <Tabs/>
                <SimilarProducts/>
			</div>
		</>
	);
};

export default CarsDetails;
