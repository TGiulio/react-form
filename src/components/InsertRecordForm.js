import React from 'react';

class InsertRecordForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { amount: '', category: 'Travel', description: '' };
	}

	setValue = (e) => {
		switch (e.target.name) {
			case 'amount':
				this.setState({ amount: e.target.value });
				break;

			case 'category':
				this.setState({ category: e.target.value });
				break;

			case 'description':
				this.setState({ description: e.target.value });
				break;
			default:
				break;
		}
	};

	addIncomeButton = () => {
		if (
			this.state.amount === '' ||
			this.state.category === '' ||
			this.state.description === ''
		) {
		} else {
			this.props.addIncome(
				this.state.amount,
				this.state.category,
				this.state.description
			);
			this.setState({ amount: '', category: 'Travel', description: '' });
		}
	};

	addExpenseButton = () => {
		if (
			this.state.amount === '' ||
			this.state.category === '' ||
			this.state.description === ''
		) {
		} else {
			this.props.addExpense(
				this.state.amount,
				this.state.category,
				this.state.description
			);
			this.setState({ amount: '', category: 'Travel', description: '' });
		}
	};

	render() {
		return (
			<div>
				<label htmlFor="amount">Amount</label>
				<br />
				<input
					type="text"
					name="amount"
					value={this.state.amount}
					onChange={this.setValue}
					autoComplete="off"
				></input>
				<br />
				<label htmlFor="select">Category</label>
				<br />
				<select
					name="category"
					value={this.state.category}
					onChange={this.setValue}
				>
					<option value="Travel">Travel</option>
					<option value="Bills">Bills</option>
					<option value="Groceries">Groceries</option>
					<option value="Salary">Salary</option>
				</select>

				<br />
				<label htmlFor="description">Description</label>
				<br />
				<textarea
					name="description"
					value={this.state.description}
					onChange={this.setValue}
				></textarea>
				<br />
				<br />
				<button onClick={this.addIncomeButton}>Income</button>
				<button onClick={this.addExpenseButton}>Expense</button>
			</div>
		);
	}
}

export default InsertRecordForm;
