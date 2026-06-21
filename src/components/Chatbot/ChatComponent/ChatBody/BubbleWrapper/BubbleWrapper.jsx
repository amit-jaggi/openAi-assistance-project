import './BubbleWrapper.scss';
import RoleSvg from '../../../../atoms/SvgContainer/SvgContainer';

export default function BubbleWrapper({ sender, children }) {;
	return (
		<div className={`bubble-wrapper ${sender === 'user' ? 'reverse-layout' : ''}`}>
			<div className={`svg-container`}>
				<RoleSvg role={sender} />
			</div>

			<div className={`message-container`}>
				{children}
			</div>
		</div>
	)
}
