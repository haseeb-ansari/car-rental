import { FaEye } from 'react-icons/fa';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import LayoutWhite from '../components/LayoutWhite';
import { useEffect } from 'react';

const Transactions = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
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
								<div className="transaction-info">
									<h3 className="info-text">My Car Listing</h3>
									<div className="transaction-info-conent">
										<table>
											<thead>
												<tr>
													<th>Order Id</th>
													<th>Pick Up</th>
													<th>Drop Up </th>
													<th>Duration</th>
													<th>Price</th>
													<th>Status</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>#2345</td>
													<td> New York, USA</td>
													<td>New York, USA </td>
													<td>1 Months </td>
													<td>$600</td>
													<td>Complited</td>
													<td>
														<Link>
															<FaEye />
														</Link>
													</td>
												</tr>
												<tr>
													<td>#2345</td>
													<td> New York, USA</td>
													<td>New York, USA </td>
													<td>1 Months </td>
													<td>$600</td>
													<td>Complited</td>
													<td>
														<Link>
															<FaEye />
														</Link>
													</td>
												</tr>
												<tr>
													<td>#2345</td>
													<td> New York, USA</td>
													<td>New York, USA </td>
													<td>1 Months </td>
													<td>$600</td>
													<td>Complited</td>
													<td>
														<Link>
															<FaEye />
														</Link>
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

export default Transactions;
