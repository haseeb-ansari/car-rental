import { FaArrowRightLong } from 'react-icons/fa6';

const CheckoutBill = () => {
	return (
		<>
			<div className="checkout-bill-main-container">
				<div className="ckeckout-bill-inputs">
					<div className="billing-info">
						<h3 className="info-text">Billing Info</h3>
						<div className="billing-form">
							<form>
								<div className="form-box-1">
									<div className="input-box">
										<label htmlFor="name">First Name</label>
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

								<div className="payment-info-container">
									<h3 className="info-text">Payment Info</h3>

									<div className="form-box-1">
										<div className="input-box">
											<label htmlFor="card-name">Card Holder Name</label>
											<input
												id="card-name"
												type="text"
												className="input-fields"
												placeholder="Name on Card"
											/>
										</div>
										<div className="input-box">
											<label htmlFor="cardNumber">Card Number</label>
											<input
												id="cardNumber"
												type="text"
												className="input-fields"
												placeholder="your card number"
											/>
										</div>
										<div className="input-box">
											<label htmlFor="ex-date">Expire Date</label>
											<input
												id="ex-date"
												type="text"
												className="input-fields"
												placeholder="Expire"
											/>
										</div>
										<div className="input-box">
											<label htmlFor="cvv">CVV</label>
											<input
												id="cvv"
												type="text"
												className="input-fields"
												placeholder="CVV"
											/>
										</div>
									</div>
                                    <div className="payment-text-area">
                                            <label htmlFor="pay-note">Additional Note</label>
                                            <textarea id="pay-note" cols="30" rows="10" placeholder='Write note'></textarea>
                                        </div>
								</div>
                                <button className="btn-forms">Confirming Booking <FaArrowRightLong /></button>

							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CheckoutBill;
