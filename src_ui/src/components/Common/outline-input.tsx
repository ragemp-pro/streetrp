import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
	value: number;
	max: number;
	min: number;
	onChange: (value: number) => void;
	className?: string;
};

export default class OutlineInput extends Component<Props> {
	handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
		const { min, max } = this.props;
		const value = parseInt(event.currentTarget.value, 10);

		this.props.onChange(!value || value < min ? min : value > max ? max : value);
	};

	render() {
		const { value, className } = this.props;

		return (
			<input
				className={classNames('outline-input', className)}
				type="text"
				value={value}
				onChange={this.handleChangeInput.bind(this)}
			/>
		);
	}
}
