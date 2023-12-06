import LayoutWhite from '../components/LayoutWhite';
import Sidebar from './Sidebar';

const Favorites = () => {
	
	return (
		<>
			<section className="section-dashboard margin-top">
				<div className="container">
					<div className="grid-colum-percent">
						<div className="dashboard-links-container">
							<LayoutWhite className="sticky">
								<Sidebar />
							</LayoutWhite>
						</div>
						<div className="dashboard-content">
							<LayoutWhite>
								<p>Content2</p>
							</LayoutWhite>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Favorites;
