const Carfilter = () => {
	return (
		<>
			<div className="car-filter-container">
				<div className="tag-links">
					<h3>Brand</h3>
				</div>
        <ul>
          <li><input type="checkbox" id="brands" /><label htmlFor="brands">All Brands</label></li>
          <li><input type="checkbox" id="bmw" /><label htmlFor="bmw">BMW</label></li>
          <li><input type="checkbox" id="toyota" /><label htmlFor="toyota">Toyota</label></li>
          <li><input type="checkbox" id="ferrari" /><label htmlFor="ferrari">Ferrari</label></li>
          <li><input type="checkbox" id="audi" /><label htmlFor="audi">Audi</label></li>
          <li><input type="checkbox" id="tesla" /><label htmlFor="tesla">Tesla</label></li>
          <li><input type="checkbox" id="mrec" /><label htmlFor="mrec">Mercedes</label></li>
          <li><input type="checkbox" id="honda" /><label htmlFor="honda">Hyundai</label></li>
        </ul>
			</div>
		</>
	);
};

export default Carfilter;
