import React from 'react';
import classNames from 'classnames';
import { ChromePicker, GithubPicker, RGBColor } from 'react-color';
import Selector from 'components/Common/selector';

const colors = [
	'#0D1116',
	'#1C1D21',
	'#32383D',
	'#454B4F',
	'#999DA0',
	'#C2C4C6',
	'#979A97',
	'#637380',
	'#63625C',
	'#3C3F47',
	'#444E54',
	'#1D2129',
	'#13181F',
	'#26282A',
	'#515554',
	'#151921',
	'#1E2429',
	'#333A3C',
	'#8C9095',
	'#39434D',
	'#506272',
	'#1E232F',
	'#363A3F',
	'#A0A199',
	'#D3D3D3',
	'#B7BFCA',
	'#778794',
	'#C00E1A',
	'#DA1918',
	'#B6111B',
	'#A51E23',
	'#7B1A22',
	'#8E1B1F',
	'#6F1818',
	'#49111D',
	'#B60F25',
	'#D44A17',
	'#C2944F',
	'#F78616',
	'#CF1F21',
	'#732021',
	'#F27D20',
	'#FFC91F',
	'#9C1016',
	'#DE0F18',
	'#8F1E17',
	'#A94744',
	'#B16C51',
	'#371C25',
	'#132428',
	'#122E2B',
	'#12383C',
	'#31423F',
	'#155C2D',
	'#1B6770',
	'#66B81F',
	'#22383E',
	'#1D5A3F',
	'#2D423F',
	'#45594B',
	'#65867F',
	'#222E46',
	'#233155',
	'#304C7E',
	'#47578F',
	'#637BA7',
	'#394762',
	'#D6E7F1',
	'#76AFBE',
	'#345E72',
	'#0B9CF1',
	'#2F2D52',
	'#282C4D',
	'#2354A1',
	'#6EA3C6',
	'#112552',
	'#1B203E',
	'#275190',
	'#608592',
	'#2446A8',
	'#4271E1',
	'#3B39E0',
	'#1F2852',
	'#253AA7',
	'#1C3551',
	'#4C5F81',
	'#58688E',
	'#74B5D8',
	'#FFCF20',
	'#FBE212',
	'#916532',
	'#E0E13D',
	'#98D223',
	'#9B8C78',
	'#503218',
	'#473F2B',
	'#221B19',
	'#653F23',
	'#775C3E',
	'#AC9975',
	'#6C6B4B',
	'#402E2B',
	'#A4965F',
	'#46231A',
	'#752B19',
	'#BFAE7B',
	'#DFD5B2',
	'#F7EDD5',
	'#3A2A1B',
	'#785F33',
	'#B5A079',
	'#FFFFF6',
	'#EAEAEA',
	'#B0AB94',
	'#453831',
	'#2A282B',
	'#726C57',
	'#6A747C',
	'#354158',
	'#9BA0A8',
	'#5870A1',
	'#EAE6DE',
	'#DFDDD0',
	'#F2AD2E',
	'#F9A458',
	'#83C566',
	'#F1CC40',
	'#4CC3DA',
	'#4E6443',
	'#BCAC8F',
	'#F8B658',
	'#FCF9F1',
	'#FFFFFB',
	'#81844C',
	'#FFFFFF',
	'#F21F99',
	'#FDD6CD',
	'#DF5891',
	'#F6AE20',
	'#B0EE6E',
	'#08E9FA',
	'#0A0C17',
	'#0C0D18',
	'#0E0D14',
	'#9F9E8A',
	'#621276',
	'#0B1421',
	'#11141A',
	'#6B1F7B',
	'#1E1D22',
	'#BC1917',
	'#2D362A',
	'#696748',
	'#7A6C55',
	'#C3B492',
	'#5A6352',
	'#81827F',
	'#AFD6E4',
	'#7A6440',
	'#7F6A48'
];
const types = ['Обычный', 'Металлик', 'Жемчужный', 'Матовый', 'Металл', 'Хром'];

type Props = {
	state: RGBColor;
	custom?: boolean;
	typeSelector?: boolean;
	onChange: (data: RGBColor) => void;
};

export default function LscColor({ state, custom, typeSelector, onChange }: Props) {
	const onChangeType = (name: string) => {
		const index = types.indexOf(name);

		onChange({ ...state, a: index });
	};

	return (
		<div className={classNames('lsc_color', { 'lsc_color--custom': custom })}>
			<h3 className="lsc_color-title">Выбор цвета</h3>

			{custom ? (
				<GithubPicker
					width="100%"
					triangle="hide"
					colors={colors}
					color={colors[state.a || 0]}
					onChange={({ hex }) =>
						onChange({ ...state, a: colors.indexOf(hex.toUpperCase()) })
					}
				/>
			) : (
				<>
					<ChromePicker
						styles={{
							default: {
								picker: { width: '100%', background: 'rgba(0,0,0,0.45)' }
							}
						}}
						disableAlpha={true}
						color={{ ...(state as RGBColor), a: 1 }}
						onChange={({ rgb }) => onChange({ ...rgb, a: state.a })}
					/>

					{typeSelector && (
						<Selector
							className="lsc_color-type"
							items={types}
							value={types[state.a || 0]}
							onChange={onChangeType}
						/>
					)}
				</>
			)}
		</div>
	);
}
