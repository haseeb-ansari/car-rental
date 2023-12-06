const Infocard = ({ icon, name, info, className = '' }) => {
	return (
		<>
			<div className={`info-card ${className}`}>
				<div className="info-card-icon">{icon}</div>
				<div className="card-info">
					<h3>{name}</h3>
					<p>{info}</p>
				</div>
			</div>
		</>
	);
};

export default Infocard;
