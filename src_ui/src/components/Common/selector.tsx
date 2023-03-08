import React, { Component } from 'react';
import classNames from 'classnames';
import { indexOf } from 'lodash';
import {
	FaChevronCircleLeft,
	FaChevronCircleRight,
	FaChevronLeft,
	FaChevronRight
} from 'react-icons/fa';

type Props = {
	items: number[] | string[];
	value: number | string;
	circleButton?: boolean;
	customValue?: string;
	title?: string;
	className?: string;
	onChange: (value: any) => void;
};

export default class Selector extends Component<Props, {}> {
	nextItem() {
		const { items, value, onChange } = this.props;
		const index = indexOf(items, value);

		if (items.length > 1) {
			onChange(index === items.length - 1 ? items[0] : items[index + 1]);
		}
	}

	previousItem() {
		const { items, value, onChange } = this.props;
		const index = indexOf(items, value);

		if (items.length > 1) {
			onChange(index === 0 ? items[items.length - 1] : items[index - 1]);
		}
	}

	render() {
		const { title, value, circleButton, customValue, className } = this.props;

		return (
			<div className={classNames('selector', className)}>
				{title && <h4 className="title">{title}</h4>}

				<div className="container">
					<button onClick={this.previousItem.bind(this)}>
						{circleButton ? <FaChevronCircleLeft /> : <FaChevronLeft />}
					</button>

					<span className="value">{customValue ?? value}</span>

					<button onClick={this.nextItem.bind(this)}>
						{circleButton ? <FaChevronCircleRight /> : <FaChevronRight />}
					</button>
				</div>
			</div>
		);
	}
}
