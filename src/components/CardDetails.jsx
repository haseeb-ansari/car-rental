import { GiRoad } from 'react-icons/gi';
import { IoCarSportOutline, IoPersonOutline } from 'react-icons/io5';
import { LuFuel } from 'react-icons/lu';
import { RiSteering2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { cars } from '../data';
import Card from '../UI/Card';

const CardDetails = () => {
	return (
		<>
			<div className=" car-product-card">
				<div className="grid-colum-two">
					{cars.map(
						({
							id,
							image,
							title,
							model,
							seater,
							hybrid,
							km,
							mode,
							price,
							icon,
							path
						}) => {
							return (
								<Card key={id} className="card-product-main-container">
									<div className="car-product-card-image">
										<img src={image} alt="car" />
									</div>

									<h3 className="car-product-card-title">{title}</h3>

									<div className="car-product-card-content">
										<ul>
											<li>
												<span>
													<IoCarSportOutline /> {model}
												</span>
											</li>
											<li>
												<span>
													<IoPersonOutline />
													{seater}
												</span>
											</li>
											<li>
												<span>
													<LuFuel />
													{hybrid}
												</span>
											</li>
											<li>
												<span>
													<GiRoad />
													{km}
												</span>
											</li>
											<li>
												<span>
													<RiSteering2Line />
													{mode}
												</span>
											</li>
										</ul>
										<div className="car-rent-container">
											<p className="car-product-price">${price}/ month</p>
											<div className="car-rent-box">
												<Link className="fav-icon">{icon}</Link>
												<Link to={path} className="rent-link">Rent Now</Link>
											</div>
										</div>
									</div>
								</Card>
							);
						}
					)}
				</div>
			</div>
		</>
	);
};

export default CardDetails;
