import { useState } from 'react';

import { FaMinus, FaPlus } from 'react-icons/fa';

const Faq = ({ question, answer, icon }) => {
	const [isShowingAnswer, setIsShowingAnswer] = useState(false);
	return (
		<>
			<article className="faq-main-container">
				<div
					className="faq"
					onClick={() => setIsShowingAnswer(preve => !preve)}
				>
					<div className="question-container">
						<span className="question-icon">{icon}</span>
						<h3 className={`${isShowingAnswer ? "active" : ""}`}>{question}</h3>
					</div>
					<button className="faq_icon">
						{isShowingAnswer ? <FaMinus /> : <FaPlus />}
					</button>
				</div>
				{isShowingAnswer && <p className="answer">{answer}</p>}
			</article>
		</>
	);
};

export default Faq;
