import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import GradientButton from 'components/Common/gradient-button';
import PrimaryTitle from 'components/Common/primary-title';
import Field from './field';

type Props = {
	email: string;
};

export default function AuthConfirm({ email }: Props) {
	return (
		<div className="auth_confirm">
			<PrimaryTitle className="auth_title">Неизвестное устройство</PrimaryTitle>

			<p className="auth_confirm-remark">
				Попытка входа с неизвестного устройства.
				<br />
				Пожалуйста, подтвердите что это вы.
			</p>

			<Formik
				initialValues={{ code: '' }}
				validationSchema={Yup.object({
					code: Yup.string().required('Заполните поле')
				})}
				onSubmit={(values, { setFieldError }) => {
					rpc
						.callServer('Auth-SignInWithCode', [email, values.code])
						.then(() => rpc.callClient('Auth-SuccessLogin', email))
						.catch(() => setFieldError('code', 'Неверный код'));
				}}
			>
				<Form className="auth_form">
					<Field
						title="Код подтверждения"
						type="text"
						name="code"
						placeholder="Проверьте свой e-mail"
					/>

					<GradientButton type="submit">Подтвердить</GradientButton>
				</Form>
			</Formik>
		</div>
	);
}
