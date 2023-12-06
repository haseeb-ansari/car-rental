import { counter } from '../data';
import Card from '../UI/Card';

const Counter = () => {
	return (
		<>
			<section className="section-padding-bottom counter-padding counter-sec">
				<div className="counter-bg-color">
					<div className="container">
						<div className="counter-main-container">
							<div className="grid-colum-four">
								{counter.map(({ id, image, num, info }) => {
									return (
										<Card key={id} className="counter-container">
											<div className="image-counter">
												<img src={image} alt="image" />
											</div>
											<div className="content-counter">
												<h3>{num}</h3>
												<p>{info}</p>
											</div>
										</Card>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Counter;
