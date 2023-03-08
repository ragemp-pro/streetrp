import React, { useState } from 'react';
import classNames from 'classnames';
import { Field, ErrorMessage } from 'formik';
import { IoIosClose, IoIosEye, IoIosEyeOff } from 'react-icons/io';

type Props = {
	title: string;
	type: string;
	name: string;
	placeholder: string;
	className?: string;
};

export default function AuthField({ className, title, type, name, placeholder }: Props) {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<div className={classNames('auth_field', className)}>
			<h4 className="auth_field-title">{title}</h4>

			<Field name={name} placeholder={placeholder}>
				{({ field, form }: any) => (
					<div className="auth_field-input">
						<input
							type={passwordVisible ? 'text' : type}
							{...field}
							placeholder={placeholder}
						/>

						{type === 'password' ? (
							<div className="auth_field-reset">
								{passwordVisible ? (
									<IoIosEye onClick={() => setPasswordVisible(false)} />
								) : (
									<IoIosEyeOff onClick={() => setPasswordVisible(true)} />
								)}
							</div>
						) : (
							field.value && (
								<div className="auth_field-reset">
									<IoIosClose
										onClick={() => form.setFieldValue(name, type !== 'number' ? '' : 0)}
									/>
								</div>
							)
						)}
					</div>
				)}
			</Field>

			<ErrorMessage className="auth_field-error" component="p" name={name} />
		</div>
	);
}
