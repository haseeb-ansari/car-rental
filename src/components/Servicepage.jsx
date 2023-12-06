import Image from '../assets/srvsingle1.jpg';
import Carone from '../assets/srvsingle2.jpg';

const Servicepage = () => {
	return (
		<>
			<div className="service-info-page">
				<div className="retal-vehicle">
					<div className="retal-vehicle-image">
						<img src={Image} alt="Service vehical" />
					</div>
					<h3>Car Rental</h3>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
						sed quia non numquam eius modi tempora incidunt ut labore et.
					</p>
					<p>
						thumb Car Rental Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem aperiam,
						eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
						voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
						magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
						quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
						adipisci velit, sed quia non numquam eius modi tempora incidunt ut
						labore et.
					</p>
				</div>
				<div className="cars-details">
					<div className="grid-colum-two">
						<div className="car-image">
							<img src={Carone} alt="Car Image" />
						</div>
						<div className="car-image">
							<img src={Carone} alt="Car Image" />
						</div>
					</div>
					<p>
						Power of choice is untrammelled and when nothing prevents our being
						able to do what we like best, every pleasure is to be welcomed and
						every pain avoided. But in certain circumstances and owing to the
						claims of duty or the obligations of business it will frequently
						occur that pleasures have to be repudiated and annoyances accepted.
						The wise man therefore always holds in these matters to this
						principle of selection.
					</p>
				</div>
				<div className="work-process">
					<h3>Our Work Process</h3>
					<p>
						Aliquam facilisis rhoncus nunc, non vestibulum mauris volutpat non.
						Vivamus tincidunt accumsan urna, vel aliquet nunc commodo tristique.
						Nulla facilisi. Phasellus vel ex nulla. Nunc tristique sapien id
						mauris efficitur, porta scelerisque nisl dignissim.
					</p>

					<ul>
						<li>
							Fusce justo risus placerat in risus eget tincidunt consequat elit.
						</li>
						<li>Nunc fermentum sem sit amet dolor laoreet placerat.</li>
						<li>Nullam rhoncus dictum diam quis ultrices.</li>
						<li>
							Integer quis lorem est uspendisse eu augue porta ullamcorper
							dictum.
						</li>
						<li>
							Quisque tristique neque arcu ut venenatis felis malesuada et
						</li>
					</ul>
				</div>

				<div className="work-process">
					<h3>Service Features</h3>
					<p>
						Quisque a nisl id sem sollicitudin volutpat. Cras et commodo quam,
						vel congue ligula. Orci varius natoque penatibus et magnis dis
						parturient montes, nascetur ridiculus mus. Cras quis venenatis
						neque. Donec volutpat tellus lobortis mi ornare eleifend. Fusce eu
						nisl ut diam ultricies accumsan. Integer lobortis vestibulum nunc id
						porta.
					</p>
				</div>
			</div>
		</>
	);
};

export default Servicepage;
