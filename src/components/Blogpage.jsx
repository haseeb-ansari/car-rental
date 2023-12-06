import Image from '../assets/srvsingle1.jpg';
import Blogimg1 from '../assets/blogpage1.jpg';
import Blogimg2 from '../assets/blogpage2.jpg';
import Com1 from '../assets/com-1.jpg';
import Com2 from '../assets/com-2.jpg';
import Author from '../assets/author.jpg';
import { Link } from 'react-router-dom';
import {
	FaDribbble,
	FaFacebookF,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa6';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GoClock } from 'react-icons/go';
import { GoReply } from 'react-icons/go';
import { LiaTelegramPlane } from 'react-icons/lia';

const Blogpage = () => {
	return (
		<>
			<div className="blog-info-page">
				<div className="retal-vehicle">
					<div className="retal-vehicle-image">
						<img src={Image} alt="Service vehical" />
					</div>
					<h3>It is a long established fact that a reader</h3>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit.
					</p>
					<p>
						thumb Car Rental Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem aperiam,
						eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
						voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
						magni dolores.
					</p>
				</div>
				<div className="blog-qoutes">
					<p>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution.
					</p>
					<h5>Mark Crawford</h5>
				</div>
				<p className="blog-para">
					In a free hour when our power of choice is untrammelled and when
					nothing prevents our being able to do what we like best, every
					pleasure is to be welcomed and every pain avoided. But in certain
					circumstances and owing to the claims of duty or the obligations of
					business it will frequently occur that pleasures have to be repudiated
					and annoyances accepted. The wise man therefore always holds in these
					matters to this principle of selection.
				</p>
				<div className="cars-details">
					<div className="grid-colum-two">
						<div className="car-image">
							<img src={Blogimg1} alt="Car Image" />
						</div>
						<div className="car-image">
							<img src={Blogimg2} alt="Car Image" />
						</div>
					</div>
					<p>
						Power of choice is untrammelled and when nothing prevents our being
						able to do what we like best, every pleasure is to be welcomed and
						every pain avoided. But in certain circumstances and owing to the
						claims of duty or the obligations of business it will frequently
						occur that pleasures have to be repudiated and annoyances accepted.
						The wise man therefore always holds in these matters to this
						principle of selection.
					</p>
				</div>
				<div className="blog-page-tag">
					<div className="blog-tags">
						<h4>Tags:</h4>
						<ul>
							<li>
								<Link>Rent</Link>
							</li>
							<li>
								<Link>Drive</Link>
							</li>
							<li>
								<Link>Car</Link>
							</li>
						</ul>
					</div>

					<div className="blog-qoutes-autor">
						<div className="author-img">
							<img src={Author} alt="Author" />
						</div>
						<div className="author-info">
							<h4>Author</h4>
							<h2>Roger D Duque</h2>
							<p>
								It is a long established fact that a reader will be distracted
								by the abcd readable content of a page when looking at its
								layout that more less.
							</p>
							<div className="follow-social-links">
								<ul>
									<li>
										<Link>
											<FaFacebookF />
										</Link>
									</li>
									<li>
										<Link>
											<AiOutlineTwitter />
										</Link>
									</li>
									<li>
										<Link>
											<FaDribbble />
										</Link>
									</li>
									<li>
										<Link>
											<FaWhatsapp />
										</Link>
									</li>
									<li>
										<Link>
											<FaYoutube />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="comments-container">
					<h3>Comments (20)</h3>

					<div className="comment-box">
						<div className="comment-img">
							<img src={Com1} alt="comment" />
						</div>
						<div className="comment-info">
							<h4>Jesse Sinkler</h4>
							<span>
								<GoClock />
								17 March, 2023
							</span>
							<p>
								There are many variations of passages the majority have suffered
								in some injected humour or randomised words which don't look
								even slightly believable.
							</p>
							<Link>
								<GoReply />
								Reply
							</Link>
						</div>
					</div>

					<div className="comment-box reply-pad">
						<div className="comment-img">
							<img src={Com2} alt="comment" />
						</div>
						<div className="comment-info">
							<h4>Daniel Wellman</h4>
							<span>
								<GoClock />
								17 March, 2023
							</span>
							<p>
								There are many variations of passages the majority have suffered
								in some injected humour or randomised words which don't look
								even slightly believable.
							</p>
							<Link>
								<GoReply />
								Reply
							</Link>
						</div>
					</div>
				</div>
				<div className="comment-form">
					<h3>Leave A Comment</h3>
					<div className="contact-form">
						<div className="form-box-1">
							<div className="input-box">
								<input
									id="name"
									type="text"
									className="input-fields"
									placeholder="Your Name*"
								/>
							</div>

							<div className="input-box">
								<input
									id="email"
									type="email"
									className="input-fields"
									placeholder="Your Email*"
								/>
							</div>
						</div>
						<div className="input-box">
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								className="input-fields"
								placeholder="Your comment*"
							></textarea>
						</div>
						<button className="btn-forms">
							Post comment <LiaTelegramPlane />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Blogpage;
