// import React from 'react';
import './SvgContainer.scss';
import User from '../../../assets/user.svg?react';
import Bot from '../../../assets/bot.svg?react';
import System from '../../../assets/system.svg?react';
import Send from '../../../assets/send.svg?react';

export default function SvgContainer({ role = ''}) {
	function getCurrentSvg(roleType = '') {
		switch (roleType) {
			case 'bot':
				return <Bot className={roleType} />;
			case 'system':
				return <System className={roleType} />
			case 'user':
				return <User className={roleType} />;
			default:
				return <Send className={'send'} />;
		}
	};

	return (
		<div className={`svg-wrapper`}>
			{getCurrentSvg(role)}
		</div>
	);
}
