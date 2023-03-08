import React, { Component } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

type Props = {
	value: number;
	max: number;
	min: number;
	onChange: (value: number) => void;
};

export default class Input extends Component<Props> {
	increase() {
		const { max, value } = this.props;

		if (value >= max) return;

		this.props.onChange(value + 1);
	}

	decrease() {
		const { min, value } = this.props;

		if (value <= min) return;

		this.props.onChange(value - 1);
	}

	setMax() {
		this.props.onChange(this.props.max);
	}

	handleChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
		const { min, max } = this.props;
		const value = parseInt(event.currentTarget.value, 10);

		this.props.onChange(!value || value < min ? min : value > max ? max : value);
	};

	render() {
		const { value } = this.props;

		return (
			<div className="gas_input">
				<button className="gas_input-button" onClick={this.decrease.bind(this)}>
					<FaMinus />
				</button>

				<input type="text" value={value} onChange={this.handleChangeInput.bind(this)} />

				<button
					className="gas_input-button gas_input-button--inc"
					onClick={this.increase.bind(this)}
				>
					<FaPlus />
				</button>

				<button className="gas_input-button" onClick={this.setMax.bind(this)}>
					MAX
				</button>
			</div>
		);
	}
}
