import React from 'react';
import { Field, FieldAttributes } from 'formik';

type Props = FieldAttributes<React.InputHTMLAttributes<HTMLInputElement>> & {
	label?: string;
};

export default function BankField({ type, placeholder, label, ...props }: Props) {
	return (
		<div className="bank_field">
			<Field type={type} {...props}>
				{({ field }: any) => (
					<input
						className="outline-input bank_field-input"
						type={type}
						placeholder={placeholder}
						{...field}
						onBlur={(e) => {
							field.onBlur(e);

							if (props.onBlur) props.onBlur(e);
						}}
					/>
				)}
			</Field>

			<p className="bank_field-label">{label}</p>
		</div>
	);
}
