import { PiKeyLight } from 'react-icons/pi';
import Logo from '../assets/beetellogo1.svg';

const Forgotpassword = () => {
	return (
		<>
			<section className="section margin-top">
				<div className="form-conatiner">
					<div className="form-img-container">
						<div className="form-img">
							<img src={Logo} alt="formImage" />
						</div>
						<p>Reset your Beetel car rentals account password</p>
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
						<button className="btn-forms">
							<PiKeyLight /> Send Reset Link
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Forgotpassword;
