import React from 'react';
import { IoIosSearch, IoIosCloseCircle } from 'react-icons/io';
import classNames from 'classnames';

type Props = {
	value: string;
	placeholder: string;
	className?: string;
	onChange: (value: string) => void;
};

export default function SearchInput({ className, value, onChange, ...props }: Props) {
	return (
		<label className={classNames('phone_search', className)}>
			<IoIosSearch className="phone_search-icon" />

			<input
				type="text"
				value={value}
				onChange={({ target }) => onChange(target.value)}
				{...props}
			/>

			{value && (
				<IoIosCloseCircle className="phone_search-close" onClick={() => onChange('')} />
			)}
		</label>
	);
}
