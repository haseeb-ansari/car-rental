import { Link } from 'react-router-dom';
import Logo from '../assets/beetellogo1.svg';
import { LiaTelegramPlane } from 'react-icons/lia';
import { BiLogoFacebook, BiLogoGoogle, BiLogoTwitter } from 'react-icons/bi';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useState } from 'react';

const Register = () => {
	const [password, setPassword] = useState(false);
	const hadelsubmit = () => {
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
						<p>Create your Beetel car rentals account</p>
					</div>
					<form>
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
								<div className="eye-icon" onClick={hadelsubmit}>
									{password ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
								</div>
							</div>
						</div>
						<div className="terms-policies">
							<input type="checkbox" id="terms-condition" />
							<label htmlFor="terms-condition">
								I agree with the&nbsp;	
								<Link>
									<span>Terms Of Service.</span>
								</Link>
							</label>
						</div>
						<button className="btn-forms">
							<LiaTelegramPlane /> Register
						</button>
					</form>
					<div className="other-links-container">
						<p className="alredy-account">
							Already have an account? <Link to="/login">Login.</Link>
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

export default Register;
