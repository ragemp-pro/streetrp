import React, { Component } from 'react';
import rpc from 'utils/rpc';

type State = {
	active: boolean;
	position: number;
};

export default function withRotation(WrappedComponent: any) {
	return class extends Component<{}, State> {
		readonly state: State = {
			active: false,
			position: 0
		};

		componentDidMount() {
			document.addEventListener('mousedown', this.onMouseDown);
			document.addEventListener('mouseup', this.onMouseUp);
			document.addEventListener('mousemove', this.rotateCamera);
		}

		componentWillUnmount() {
			document.removeEventListener('mousedown', this.onMouseDown);
			document.removeEventListener('mouseup', this.onMouseUp);
			document.removeEventListener('mousemove', this.rotateCamera);
		}

		onMouseDown = (event: MouseEvent) => {
			const parentNode = (event as any)?.target?.parentNode as any;

			if (parentNode?.id !== 'root' && parentNode !== document.body) return;

			this.setState(() => ({ active: true, position: event.clientX }));
		};

		onMouseUp = () => {
			this.setState(() => ({ active: false, position: 0 }));

			rpc.callClient('playerStopRotation');
		};

		rotateCamera = (event: MouseEvent) => {
			const { active, position } = this.state;
			const x = event.clientX;

			if (!active || position === x) return;

			this.setState(() => ({ position: x }));

			rpc.callClient('playerRotation', position < x);
		};

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
}
