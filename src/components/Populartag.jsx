import { Link } from 'react-router-dom';

const Populartag = () => {
	return (
		<>
			<div className="popular-tag-links">
				<div className="tag-links">
					<h3>Populat Tag</h3>
				</div>
                <Link>Car</Link>
                <Link>Rental</Link>
                <Link>Drive</Link>
                <Link>Insurance</Link>
                <Link>Offer</Link>
                <Link>Tips</Link>
                <Link>Maintenance</Link>
                <Link>Money</Link>
			
			</div>
		</>
	);
};

export default Populartag;
