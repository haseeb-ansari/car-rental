const Transmission = () => {
	return (
		<>
			<div className="transmission-container">
				<div className="tag-links">
					<h3>Transmission</h3>
				</div>
				<ul>
					<li>
						<input type="checkbox" id="auto" />
						<label htmlFor="auto">Automatic</label>
					</li>
					<li>
						<input type="checkbox" id="manual" />
						<label htmlFor="manual">Manual</label>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Transmission;
