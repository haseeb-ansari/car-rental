import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/beetellogo1.svg';
import { links } from '../data';
import { CgProfile } from 'react-icons/cg';
import { PiClipboardTextLight } from 'react-icons/pi';
import { CiSettings } from 'react-icons/ci';
import { CiLogin } from 'react-icons/ci';
// import { FaShoppingCart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { MdMenu, MdOutlineClose } from 'react-icons/md';

const Header = () => {
	const [navigate, setNavigate] = useState(false)
	const [loginInfo, setLoginInfo] = useState(false);
	const [searchFiels, setSearchFiels] = useState(false);

	const handleNav = () => {
		setNavigate(true)
	}
	const handleClose = () => {
		setNavigate(false)
	}
	const handleOverlay = () => {
		setNavigate(false)
	}
	return (
		<>
		
			<header>
				{navigate && <div className='overlay' onClick={handleOverlay}></div>}
				<div className="container">
					<div className="main-header-container">
						<Link to="/">
							<img src={Logo} alt="header logo" className="logo" />
						</Link>
						<div className="nav-container">
							<nav className={`${navigate ? "active" : ""}`}>
								<MdOutlineClose className='close' onClick={handleClose} />

								<div className="search-small">
										<input
											type="text"
											placeholder="search"
											className="search-field"
										/>
								
									<FiSearch className='search-icon-small'   onClick={()=>setNavigate(prev => !prev)} />
								</div>
								<ul>
									{links.map(({ name, path }, index) => {
										return (
											<li key={index}>
												<NavLink to={path} className="nav-links" onClick={()=>setNavigate(prev => !prev)}>
													{name}
												</NavLink>
											</li>
										);
									})}
								</ul>
								
							</nav>
							<div className="nav-info">
								<div className="search">
									{searchFiels && (
										<input
											type="text"
											placeholder="search"
											className="search-field"
										/>
									)}
									<FiSearch onClick={() => setSearchFiels(!searchFiels)} />
								</div>
								{/* <div className="cart">
									<FaShoppingCart />
									<span className="badge">1</span>
								</div> */}
								<div className="login_info-container">
									<div
										className="login_info"
										onClick={() => setLoginInfo(preve => !preve)}
									>
										<CgProfile />
									</div>
									{loginInfo && (
										<div className="login_info-links">
											<Link
												to="/profile"
												onClick={() => setLoginInfo(preve => !preve)}
											>
												<CgProfile />
												My profile
											</Link>
											<Link
												to="/billing"
												onClick={() => setLoginInfo(preve => !preve)}
											>
												<PiClipboardTextLight />
												Billing info
											</Link>
											<Link
												to="/setting"
												onClick={() => setLoginInfo(preve => !preve)}
											>
												<CiSettings />
												Settings
											</Link>
											<Link
												to="/login"
												onClick={() => setLoginInfo(preve => !preve)}
											>
												<CiLogin />
												Login
											</Link>
										</div>
									)}
								</div>
								<div className="menu-bar" onClick={handleNav}>
									<MdMenu />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
