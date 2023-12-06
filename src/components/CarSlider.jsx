import CarIamgeSlider from './CarIamgeSlider';
import CarSliderContent from './CarSliderContent';

const CarSlider = () => {
	return (
		<>
			<section className="section">
				<div className="container">
					<div className="car-bg-color">
						<div className="gird-colum-percent-two">
							<CarIamgeSlider />
							<CarSliderContent />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CarSlider;
