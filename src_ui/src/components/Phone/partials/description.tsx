import React from 'react';

type Props = {
	children: string;
};

export default function PhoneDescription({ children }: Props) {
	return <p className="phone_descr">{children}</p>;
}
