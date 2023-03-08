import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import moment from 'moment-timezone';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
	placeholder: string;
	name: string;
};

export default function AdminDatePicker({ placeholder, ...props }: Props) {
	const { setFieldValue } = useFormikContext();
	const [field] = useField(props);

	function getCorrectDate(value: Date) {
		const momentDate = moment(value);
		const timezoneOffset = value.getTimezoneOffset();

		return momentDate
			.subtract(momentDate.utcOffset() + timezoneOffset, 'minutes')
			.toISOString();
	}

	return (
		<DatePicker
			{...field}
			{...props}
			value={field.value && moment(field.value).format('DD.MM.YYYY, HH:mm')}
			className="admin_field"
			calendarClassName="admin_datepicker"
			timeCaption="Время"
			timeInputLabel="Время"
			dateFormat="dd/MM/yyyy HH:mm"
			timeFormat="HH:mm"
			placeholderText={placeholder}
			locale={ru}
			selected={field.value ? new Date(field.value) : null}
			showTimeSelect
			showPopperArrow={false}
			startDate={moment().toDate()}
			timeIntervals={5}
			onChange={(val) => {
				setFieldValue(field.name, getCorrectDate(val as Date));
			}}
		/>
	);
}
