import { AiOutlineFilePdf } from 'react-icons/ai';
import { RiFolderDownloadLine } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const Downloadpdf = () => {
	return (
		<>
			<div className="download-info">
				<div className="service-conatiner">
					<h3>Dowonload</h3>
				</div>
				<ul>
					<li>
						<Link>
							<AiOutlineFilePdf /> Download Brochure
						</Link>
					</li>
					<li>
						<Link>
							<RiFolderDownloadLine /> Download Application
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Downloadpdf;
