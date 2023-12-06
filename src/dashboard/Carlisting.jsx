import Sidebar from './Sidebar';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Image from '../assets/blog8.jpg';
import LayoutWhite from '../components/LayoutWhite';

const Carlisting = () => {
	return (
		<>
			<section className="section-dashboard margin-top">
				<div className="container">
					<div className="grid-colum-percent">
						<div className="dashboard-links-container">
							<LayoutWhite className="sticky">
								<Sidebar />
							</LayoutWhite>
						</div>
						<div className="dashboard-content">
							<LayoutWhite>
								<div className="car-info">
									<h3 className="info-text">My Car Listing</h3>
									<div className="car-info-conent">
										<table>
											<thead>
												<tr>
													<th>Car Info</th>
													<th>Year</th>
													<th>Transmission</th>
													<th>Fuel Type</th>
													<th>Price</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div className="car-info-img">
															<img src={Image} alt="" />
															<p>Toyota Sports Car</p>
														</div>
													</td>
													<td>2020</td>
													<td>Automatic</td>
													<td>Hybrid</td>
													<td>$600</td>
													<td>
														<IoCloseCircleOutline />
													</td>
												</tr>
												<tr>
													<td>
														<div className="car-info-img">
															<img src={Image} alt="car image" />
															<p>Toyota Sports Car</p>
														</div>
													</td>
													<td>2020</td>
													<td>Automatic</td>
													<td>Hybrid</td>
													<td>$600</td>
													<td>
														<IoCloseCircleOutline />
													</td>
												</tr>
												<tr>
													<td>
														<div className="car-info-img">
															<img src={Image} alt="" />
															<p>Toyota Sports Car</p>
														</div>
													</td>
													<td>2020</td>
													<td>Automatic</td>
													<td>Hybrid</td>
													<td>$600</td>
													<td>
														<IoCloseCircleOutline />
													</td>
												</tr>
												<tr>
													<td>
														<div className="car-info-img">
															<img src={Image} alt="" />
															<p>Toyota Sports Car</p>
														</div>
													</td>
													<td>2020</td>
													<td>Automatic</td>
													<td>Hybrid</td>
													<td>$600</td>
													<td>
														<IoCloseCircleOutline />
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</LayoutWhite>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Carlisting;
