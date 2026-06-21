import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
	apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const useChatbot = () => {
	const [messagesObj, setMessagesObj] = useState({
		isFetching: false,
		messages: [
			{ text: `Hi, How can I assist you today?`, sender: 'bot', timestamp: new Date().toLocaleTimeString() }
		]
	});

	const sendMessage = async (message) => {
		const newMessage = [
			...messagesObj.messages,
			{ text: message, sender: 'user', timestamp: new Date().toLocaleTimeString() }
		];

		setMessagesObj(
			prevState => ({
				...prevState,
				isFetching: true,
				messages: newMessage
			})
		);

		try {
			const response = await ai.models.generateContent({
				model: import.meta.env.VITE_MODEL_ID,
				contents: message,
			});

			const botMessage = response?.candidates[0]?.content?.parts[0]?.text || 'No response';

			setMessagesObj(
				prevState => ({
					...prevState,
					isFetching: false,
					messages: [
						...newMessage, 
						{ text: botMessage, sender: `bot`, timestamp: new Date().toLocaleTimeString() }
					]
				})
			);
		} catch (error) {
			console.error(`Error :`, error);
		};
	};

	return { messagesObj, sendMessage };
};

export default useChatbot;