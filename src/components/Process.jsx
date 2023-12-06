import Card from '../UI/Card';
import { process } from '../data';

const Process = () => {
	return (
		<>
			<section className="section-padding-multiple process-sec">
				<div className="container">
					<div className="site-heading">
						<span className="site-title-tagline">PROCESS</span>
						<h2>
							How It's <span>Work</span>
						</h2>
					</div>
					<div className="grid-colum-four process-grid">
						{process.map(({ id, image, title, info, step }) => {
							return (
								<Card key={id} className="process-container">
									<div className="process-image">
										<span className="step">{step}</span>
										<img src={image} alt="Process" />
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

export default Process;
