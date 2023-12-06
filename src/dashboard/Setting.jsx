import { BiSolidKey } from 'react-icons/bi';
import LayoutWhite from '../components/LayoutWhite';
import Sidebar from './Sidebar';
import { BsFillPersonFill } from 'react-icons/bs';

const Setting = () => {
	
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
								<div className="billing-info">
									<h3 className="info-text">Update Profile Info</h3>
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
											</div>
											<button className="btn-forms btn-inline">
												Update Profile Info <BsFillPersonFill />
											</button>
										</form>
									</div>
								</div>
							</LayoutWhite>
							<LayoutWhite className="mar-top">
								<div className="billing-info">
									<h3 className="info-text">Change Password</h3>
									<div className="billing-form">
										<form>
											<div className="form-box-2">
												<div className="input-box">
													<label htmlFor="old-password">Old Password</label>
													<input
														id="old-password"
														type="password"
														className="input-fields"
														placeholder="Old Password"
													/>
												</div>
												<div className="input-box">
													<label htmlFor="new-password">New Password</label>
													<input
														id="new-password"
														type="password"
														className="input-fields"
														placeholder="New Password"
													/>
												</div>
												<div className="input-box">
													<label htmlFor="re-password">Re-Type Password</label>
													<input
														id="re-password"
														type="password"
														className="input-fields"
														placeholder="Re-Type Password"
													/>
												</div>
											</div>
											<button className="btn-forms btn-inline">
												Change Password <BiSolidKey />
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

export default Setting;
