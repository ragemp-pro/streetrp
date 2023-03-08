import React from 'react';
import classNames from 'classnames';
import { messagesRef } from './index';

type Props = {
	active: boolean;
	items: string[];
};

export default function ChatMessages({ active, items }: Props) {
	function prepareMessageText(text: string) {
		const msg = text
			.replace(/[<>]+/g, '')
			.replace(/!{([a-fA-F0-9]{6}|[a-fA-F0-9]{3})}/g, '<font style="color: #$1;" >');

		return msg;
	}

	return (
		<div className={classNames('chat_messages', { active })}>
			<ul className="chat_messages-list" ref={messagesRef}>
				{items.map((item, index) => (
					<li
						key={index}
						className="chat_messages-item"
						dangerouslySetInnerHTML={{ __html: prepareMessageText(item) }}
					/>
				))}
			</ul>
		</div>
	);
}
