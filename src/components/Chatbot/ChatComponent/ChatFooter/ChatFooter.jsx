import './ChatFooter.scss';
import { useState } from 'react';
import SendSvg from '../../../atoms/SvgContainer/SvgContainer';
import { useChatbotContext } from '../../../../context/chatBotContext';

export default function ChatFooter() {
	const [query, setQuery] = useState('');
	const { messagesObj, sendMessage } = useChatbotContext();

	const handleSend = () => {
		if (query.trim()) {
			console.log(`query >>`, query);
			sendMessage(query);
			setQuery('');
		};
	};


	return (
		<div className={`chat-footer-container`}>
			<input
				className={`query-input`}
				placeholder={`Your message here...`}
				value={query}
				onChange={e => setQuery(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter' && !messagesObj?.isFetching) {
						handleSend();
					}
				}}
			/>

			<button
				className={`send-button ${messagesObj?.isFetching ? 'disable-button' : 'enable-button'}`}
				onClick={
					() => messagesObj?.isFetching ? null : handleSend()
				}
			>
				{
					messagesObj?.isFetching
						? (<div className={`stop-container`}></div>)
						: (<SendSvg />)
				}
			</button>
		</div>
	);
};
