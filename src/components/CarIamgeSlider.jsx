import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '../assets/slider1.jpg';
import Slider2 from '../assets/slider1.jpg';
import Slider3 from '../assets/slider1.jpg';

const CarIamgeSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
	};
	return (
		<>
			<Slider {...settings} className="details-slider">
				<div>
					<img src={Slider1} alt="slider" />
				</div>
				<div>
					<img src={Slider1} alt="slider" />
				</div>
				<div>
					<img src={Slider1} alt="slider" />
				</div>
			</Slider>
		</>
	);
};

export default CarIamgeSlider;
