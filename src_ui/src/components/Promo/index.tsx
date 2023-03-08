import React from 'react';
import rpc from 'utils/rpc';
import GradientButton from 'components/Common/gradient-button';
import PrimaryTitle from 'components/Common/primary-title';

export default function Promo() {
	return (
		<div className="promo">
			<div className="promo_container">
				<PrimaryTitle className="promo_title">Первые шаги</PrimaryTitle>

				<div className="promo_remark">
					Для полноценного просмотра не забудьте включить звук в игре
				</div>

				<div className="promo_video">
					<iframe
						title="StreetRP"
						src="https://www.youtube.com/embed/PBnjkfUZ2vs"
					></iframe>
				</div>

				<GradientButton onClick={() => rpc.callServer('Character-ShowCreator')}>
					Начать
				</GradientButton>
			</div>
		</div>
	);
}
