import FAQImage from '../assets/faq1.jpg';
import Faq from './Faq';
import { faqs } from '../data';

const FAQs = () => {
	return (
		<>
			<section className="section-padding-bottom faq-sec">
				<div className="container">
					<div className="grid-colum-two">
						<div className="faq-content-container">
							<div className="faq-content">
								<div className="site-heading">
									<span className="site-title-tagline">FAQ'S</span>
									<h2>
										General <span> Frequently</span> Asked Questions
									</h2>
								</div>
								<div className="faq-text">
									<p>
										There are many variations of passages of Lorem Ipsum
										available, but the majority have suffered alteration in some
										form, by injected humour, or randomised words which don't
										look even.
									</p>
									<div className="faq-image">
										<img src={FAQImage} alt="FAQ" />
									</div>
								</div>
							</div>
						</div>

						<div className="faqs_wrapper">
							{faqs.map(({ id, question, answer,icon }) => {
								return <Faq key={id}  question={question} answer={answer} icon={icon} />;
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FAQs;
