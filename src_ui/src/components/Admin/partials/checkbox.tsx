import React from 'react';
import { useField } from 'formik';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

type Props = {
	label: string;
	name: string;
};

export default function AdminCheckbox({ label, ...props }: Props) {
	const [field] = useField({ ...props });

	return (
		<label className="admin_checkbox">
			<Checkbox {...field} {...props} className="admin-check" />

			{label}
		</label>
	);
}
