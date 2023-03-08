import React from 'react';
import { IoIosCloseCircle } from 'react-icons/io';

type Props = {
	type: 'text' | 'number';
	name?: string;
	placeholder?: string;
	value?: string | number;
	onChange?: (value: any) => void;

	// Formik API
	field?: any;
	form?: any;
} & React.DOMAttributes<HTMLInputElement>;

export default function CustomInput({
	type,
	name,
	placeholder,
	value,
	onChange,
	field,
	form,
	...props
}: Props) {
	return (
		<div className="phone_input">
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={
					onChange ? ({ target }) => onChange && onChange(target.value) : field?.onChange
				}
				{...props}
				{...field}
			/>

			{(value ?? field?.value) && (
				<IoIosCloseCircle
					className="phone_input-reset"
					onClick={() =>
						onChange
							? onChange(type === 'text' ? '' : 0)
							: form.setFieldValue(field?.name, type === 'text' ? '' : 0)
					}
				/>
			)}
		</div>
	);
}
