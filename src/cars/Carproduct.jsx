import Arrow from '../assets/downarrow.svg';
import CardDetails from '../components/CardDetails';


const Carproduct = () => {
	return (
		<>
			<div className="car-product-caontainer">
				<div className="car-sort">
					<p>Showing 1-10 of 50 Results</p>
					<div className="car-sort-box">
						<div className="drop-down">
							<img src={Arrow} alt="drop-down" />
						</div>
						<select>
							<option value="1">Sort By Default</option>
							<option value="2">Sort By Featured</option>
							<option value="3">Sort By Latest</option>
							<option value="4">Sort By Low Price</option>
							<option value="5">Sort By High Price</option>
						</select>
					</div>
				</div>
				<CardDetails/>
			</div>
		</>
	);
};

export default Carproduct;
