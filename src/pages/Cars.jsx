import { Link } from 'react-router-dom';
import Innerbanner from '../components/Innerbanner';
import Image from '../assets/bgbanner.jpg';
import LayoutWhite from '../components/LayoutWhite';
import Carfilter from '../cars/Carfilter';
import SearchBar from '../components/SearchBar';
import Transmission from '../cars/Transmission';
import Feul from '../cars/Feul';
import Carproduct from '../cars/Carproduct';

const Cars = () => {
	
	return (
		<>
			<div>
				<Innerbanner image={Image} title="Cars ">
					<div className="bread-cums">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>//</li>
							<li>Cars</li>
						</ul>
					</div>
				</Innerbanner>

				<section className="section car-section">
					<div className="container">
						<div className="cars-product-main-container">
							<div className="grid-colum-percent">
								<div className="cars-product-filter-sec">
									<LayoutWhite className="service-bg">
										<SearchBar />
									</LayoutWhite>
									<LayoutWhite className="service-bg mar-top">
										<Carfilter />
									</LayoutWhite>
									<LayoutWhite className="service-bg mar-top">
										<Transmission />
									</LayoutWhite>
									<LayoutWhite className="service-bg mar-top">
										<Feul />
									</LayoutWhite>
								</div>
								<div className="car-product-content">
									<Carproduct />
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Cars;
