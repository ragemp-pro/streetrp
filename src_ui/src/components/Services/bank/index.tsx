import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { StoreState } from 'store';
import OutlineButton from 'components/Common/outline-button';
import Logo from './logo';
import Info from './info';
import Tabs from './tabs';
import Cash from './cash';
import Replenish from './replenish';
import Transfer from './transfer';
import House from './house';
import Account from './account';
import Business from './business';

type Props = {} & RouteComponentProps & ReturnType<typeof mapStateToProps>;
type State = {
	name: string;
	account: string;
	comission: number;
	prices: { [name: string]: number };

	activeTab?: string;
};

class Bank extends Component<Props, State> {
	readonly state: State = {
		name: 'Street_Roleplay',
		account: '',
		comission: 0,
		prices: {
			account: 12
		}
	};

	componentDidMount() {
		this.setState(() => this.props.location.state);
	}

	openTab(name?: string) {
		this.setState(() => ({ activeTab: name }));
	}

	setBankAccount(account: string) {
		this.setState(() => ({ account }));
	}

	getTabComponent() {
		const { activeTab, comission, prices } = this.state;

		switch (activeTab) {
			case 'transfer':
				return <Transfer comission={comission} />;
			case 'cash_out':
				return <Cash />;
			case 'replenish':
				return <Replenish />;
			case 'house':
				return <House />;
			case 'business':
				return <Business />;

			default:
				return (
					<Account price={prices.account} setAccount={this.setBankAccount.bind(this)} />
				);
		}
	}

	render() {
		const { activeTab, account, name } = this.state;
		const { money } = this.props;

		return (
			<div className="bank">
				<Logo />

				<div className="bank_container">
					<Info name={name} money={money.bank} account={account} />

					<CSSTransition
						in={!!activeTab}
						timeout={{ appear: 300, enter: 300, exit: 0 }}
						classNames="alert"
					>
						{activeTab ? (
							this.getTabComponent()
						) : (
							<Tabs openTab={this.openTab.bind(this)} />
						)}
					</CSSTransition>

					{activeTab ? (
						<OutlineButton
							className="bank_close-btn"
							onClick={this.openTab.bind(this, undefined)}
						>
							Назад
						</OutlineButton>
					) : (
						<OutlineButton className="bank_close-btn" isClose>
							Закрыть
						</OutlineButton>
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: StoreState) => ({
	money: state.player.money
});

export default connect(mapStateToProps, {})(Bank);
