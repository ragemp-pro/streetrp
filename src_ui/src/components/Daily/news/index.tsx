import React from 'react';
import PrimaryTitle from 'components/Common/primary-title';
import Cars from './cars';
import Donation from './donation';
import Update from './update';

type Props = {
	type: string;
};

export default function DailyNews({ type }: Props) {
	return (
		<div className="daily_news">
			<PrimaryTitle className="daily_news-title">Новости</PrimaryTitle>

			{type === 'donation' ? <Donation /> : type === 'update' ? <Update /> : <Cars />}
		</div>
	);
}
