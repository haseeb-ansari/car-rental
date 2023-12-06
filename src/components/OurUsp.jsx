import Card from '../UI/Card';
import { usp } from '../data';

const OurUsp = () => {
	return (
		<>
			<section className="section our-usp-sec">
				<div className="container">
					<div className="grid-colum-three">
						{usp.map(({ id, image, title, info }) => {
							return (
								<Card key={id} className="ourusp-main-container">
									<div className="our-usp-image">
										<img src={image} alt="Ourusp" />
									</div>
									<h3>{title}</h3>
									<p>{info}</p>
								</Card>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default OurUsp;
