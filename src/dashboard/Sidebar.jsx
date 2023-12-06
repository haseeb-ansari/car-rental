import { NavLink } from 'react-router-dom';
import Logo from '../assets/profileimg.jpg';
import { BsCamera } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { AiFillCar, AiOutlineHeart } from 'react-icons/ai';
import { BiTransfer } from 'react-icons/bi';
import { PiClipboardTextLight } from 'react-icons/pi';
import { CiLogin, CiSettings } from 'react-icons/ci';

const Sidebar = () => {
	return (
		<>
			<div className="profile-conatiner">
				<div className="profile-img">
					<img src={Logo} alt="profile image" />
					<div className="camera-icon">
						<BsCamera />
					</div>
				</div>
				<h3>Antoni Jonson</h3>
				<p>jonson@example.com</p>
			</div>
			<div className="dashboard-links">
				<ul>
					<li>
						<NavLink
							to="/profile"
							className={({ isActive }) => (isActive ? 'active-links' : '')}
						>
							<CgProfile /> My Profile
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/carlisting"
							className={({ isActive }) => (isActive ? 'active-links' : '')}
						>
							<AiFillCar /> My Car Listing
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/favorites"
							className={({ isActive }) => (isActive ? 'active-links' : '')}
						>
							<AiOutlineHeart />
							Favorites
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/transactions"
							className={({ isActive }) => (isActive ? 'active-links' : '')}
						>
							<BiTransfer />
							Transactions
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/billing"
							className={({ isActive }) => (isActive ? 'active-links' : '')}
						>
							<PiClipboardTextLight />
							Billing Info
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/setting"
							className={({ isActive }) => (isActive ? 'active-links' : '')}
						>
							<CiSettings /> Settings
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? 'active-links' : '')}
						>
							<CiLogin /> Logout
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
