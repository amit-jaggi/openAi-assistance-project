import './ChatBubble.scss';
import BubbleWrapper from '../BubbleWrapper/BubbleWrapper';
import { convertTo12Hour } from '../../../../../utils/functions';
import Markdown from 'react-markdown';

export default function ChatBubble({
	messageObj = {}
}) {
	return (
		<BubbleWrapper sender={messageObj?.sender}>
			<div className={`chat-bubble-container`}>
				<div className={messageObj?.sender === 'bot' ? 'bot-bubble-container' : 'user-bubble-container'}>
					<div className={`message`}>
						{
							messageObj?.sender === 'bot'
								? (
									<Markdown>
										{messageObj?.text}
									</Markdown>
								) : messageObj?.text
						}
					</div>

					<div className={`timestamp`}>
						{convertTo12Hour(messageObj?.timestamp)}
					</div>
				</div>
			</div>
		</BubbleWrapper>
	)
};
