import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa6';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaDribbble } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const Follow = () => {
	return (
		<>
			<div className="follow-social-links">
				<div className="social-links">
					<h3>Follow us</h3>
				</div>
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
		</>
	);
};

export default Follow;
