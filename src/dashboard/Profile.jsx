import LayoutWhite from '../components/LayoutWhite';
import Sidebar from './Sidebar';

const Profile = () => {
	
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
								<div className="profile-info">
									<h3 className="info-text">Profile Info</h3>
									<div className="pofile-info-conent">
										<table>
											<tr>
												<td>FullName</td>
												<td>Antoni Jonson</td>
											</tr>
											<tr>
												<td>Email</td>
												<td>jonson@example.com</td>
											</tr>
											<tr>
												<td>Phone</td>
												<td>+2 134 562 458</td>
											</tr>
											<tr>
												<td>Address</td>
												<td>New York, USA</td>
											</tr>
											<tr>
												<td>Join Date</td>
												<td>17 March, 2023</td>
											</tr>
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

export default Profile;
