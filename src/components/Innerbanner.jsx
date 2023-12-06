const Innerbanner = ({title, image, children, className=""}) => {
	return (
		<>
			<div className="banner margin-top" style={{background:`url(${image}) no-repeat top center`}}>
				<div className="container">
					<div className="header_content">
						<h2>{title}</h2>
						<div className={`banner-content ${className}`}>{children}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Innerbanner;
