import { BiSave } from 'react-icons/bi';
import LayoutWhite from '../components/LayoutWhite';
import Sidebar from './Sidebar';

const Billing = () => {
	return (
		<>
			<section className="section-dashboard margin-top">
				<div className="container">
					<div className="grid-colum-percent">
						<div className="dashboard-links-container">
							<LayoutWhite className="sticky">
								<Sidebar  />
							</LayoutWhite>
						</div>
						<div className="dashboard-content">
							<LayoutWhite>
								<div className="billing-info">
									<h3 className="info-text">Billing Info</h3>
									<div className="billing-form">
										<form>
											<div className="form-box-1">
												<div className="input-box">
													<label htmlFor="name">Full Name</label>
													<input
														id="name"
														type="text"
														className="input-fields"
														placeholder="Your Name"
													/>
												</div>
												<div className="input-box">
													<label htmlFor="lname">Last Name</label>
													<input
														id="lname"
														type="text"
														className="input-fields"
														placeholder="Last Name"
													/>
												</div>
												<div className="input-box">
													<label htmlFor="email">Email</label>
													<input
														id="email"
														type="email"
														className="input-fields"
														placeholder="Email"
													/>
												</div>
												<div className="input-box">
													<label htmlFor="phone">Phone</label>
													<input
														id="phone"
														type="text"
														className="input-fields"
														placeholder="Phone"
													/>
												</div>
											</div>
											<div className="form-box-2">
												<div className="input-box">
													<label htmlFor="address">Address</label>
													<input
														id="address"
														type="text"
														className="input-fields"
														placeholder="Your Address"
													/>
												</div>
												<div className="input-box">
													<label htmlFor="address2">Address2</label>
													<input
														id="address2"
														type="text"
														className="input-fields"
														placeholder="Your Address2"
													/>
												</div>
											</div>
											<div className="form-box-3">
												<div className="input-box">
													<label htmlFor="city">City</label>
													<input
														id="city"
														type="text"
														className="input-fields"
														placeholder="City"
													/>
												</div>
												<div className="input-box">
													<label htmlFor="state">State</label>
													<input
														id="state"
														type="text"
														className="input-fields"
														placeholder="State"
													/>
												</div>
												<div className="input-box">
													<label htmlFor="zip">Zip</label>
													<input
														id="zip"
														type="text"
														className="input-fields"
														placeholder="Zip"
													/>
												</div>
											</div>
											<button className="btn-forms btn-inline">
												Save Billing Info <BiSave />
											</button>
										</form>
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

export default Billing;
