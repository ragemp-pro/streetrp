import React from 'react';

type Props = {
	children: string;
};

export default function WorkshopHint({ children }: Props) {
	return <p className="workshop_hint">{children}</p>;
}
