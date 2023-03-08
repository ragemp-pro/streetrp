import React from 'react';
import rpc from 'utils/rpc';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import GradientButton from 'components/Common/gradient-button';
import PrimaryTitle from 'components/Common/primary-title';
import Field from './field';

type Props = {
	setEmail: (email: string) => void;
	openForm: (name: any) => void;
	email: string;
};

export default function Login({ setEmail, openForm, email = '' }: Props) {
	return (
		<div className="auth_login">
			<PrimaryTitle>Авторизация</PrimaryTitle>

			<div className="auth_login-container">
				<Formik
					initialValues={{ email, password: '' }}
					validationSchema={Yup.object({
						email: Yup.string().email('Некорректный e-mail').required('Заполните поле'),
						password: Yup.string().required('Заполните поле')
					})}
					onSubmit={(values, actions) => {
						rpc
							.callServer('Auth-SignIn', Object.values(values))
							.then(() => rpc.callClient('Auth-SuccessLogin', values.email))
							.catch((err: any) => {
								if (err.confirm) {
									setEmail(values.email);
									return openForm('confirm');
								}

								actions.setFieldError(err.field, err.message);
							});
					}}
				>
					<Form className="auth_form">
						<Field
							title="Введите e-mail"
							type="email"
							name="email"
							placeholder="streetrp@gta.com"
						/>
						<Field
							title="Ваш пароль"
							type="password"
							name="password"
							placeholder="********"
						/>

						<a className="auth_login-forgot" onClick={() => openForm('forgot')}>
							Забыли пароль?
						</a>

						<GradientButton type="submit">Войти</GradientButton>
					</Form>
				</Formik>

				<div className="auth_login-promo">
					<h3 className="title">Нет аккаунта?</h3>

					<button className="create-button" onClick={() => openForm('register')}>
						Жми сюда
					</button>

					<p className="descr">И создай его сейчас</p>
				</div>
			</div>
		</div>
	);
}
