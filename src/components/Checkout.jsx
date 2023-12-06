import { Link } from "react-router-dom"
import Innerbanner from "./Innerbanner"
import LayoutWhite from "./LayoutWhite"
import Image from '../assets/bgbanner.jpg';
import CheckoutSidebar from "./CheckoutSidebar"
import CheckoutBill from "./CheckoutBill"
import { useEffect } from "react";


const Checkout = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
  return (
    <>
        <div>
        <section>
					<Innerbanner image={Image} title="Car Checkout">
						<div className="bread-cums">
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>//</li>
								<li>Car Checkout</li>
							</ul>
						</div>
					</Innerbanner>
				</section>
				<section className="section">
					<div className="container">
						<div className="grid-colum-percent">
							<div className="car-details-fields">
								<LayoutWhite>
									<CheckoutSidebar />
								</LayoutWhite>
							</div>
							<div className="booking-select-fields">
								<LayoutWhite>
									<CheckoutBill />
								</LayoutWhite>
							</div>
						</div>
					</div>
				</section>
        </div>
    
    </>
  )
}

export default Checkout