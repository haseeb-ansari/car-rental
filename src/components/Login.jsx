import { Link } from 'react-router-dom';
import Logo from '../assets/beetellogo1.svg';
import { BiLogoFacebook, BiLogoGoogle, BiLogoTwitter } from 'react-icons/bi';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useState } from 'react';
import { CiLogin } from 'react-icons/ci';

const Login = () => {
	const [password, setPassword] = useState(false);
	const handelsubmit = () => {
		setPassword(preve => !preve);
	};

	return (
		<>
			<section className="section margin-top">
				<div className="form-conatiner">
					<div className="form-img-container">
						<div className="form-img">
							<img src={Logo} alt="formImage" />
						</div>
						<p>Login your Beetel car rentals account</p>
					</div>
					<form>
						<div className="input-box">
							<label htmlFor="email">Email Address</label>
							<input
								id="email"
								type="email"
								className="input-fields"
								placeholder="Your Email"
							/>
						</div>
						<div className="input-box">
							<label htmlFor="password">Password</label>
							<div className="password-input">
								<input
									id="password"
									type={password ? 'text' : 'password'}
									className="input-fields"
									placeholder="Your Password"
								/>
								<div className="eye-icon" onClick={handelsubmit}>
									{password ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
								</div>
							</div>
						</div>
						<div className="forget-password">
							<label htmlFor="terms-condition"><input type="checkbox" id="terms-condition" /> Remember Me</label>
							<Link to="/forgotpassword">
								<span>Forgot Password?</span>
							</Link>
						</div>
						<button className="btn-forms">
							<CiLogin /> Login
						</button>
					</form>
					<div className="other-links-container">
						<p className="alredy-account">
							Don't have an account? <Link to="/register">Register.</Link>
						</p>
						<div className="acount-social-media">
							<p>Continue with social media</p>
							<div className="form-social-links">
								<Link>
									<BiLogoFacebook />
								</Link>
								<Link>
									<BiLogoGoogle />
								</Link>
								<Link>
									<BiLogoTwitter />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
