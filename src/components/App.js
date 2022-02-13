import InsertRecordForm from './InsertRecordForm';
import React from 'react';
import DataTable from './DataTable';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { records: [] };
	}

	addIncome = (amount, category, description) => {
		const prevRecords = this.state.records.slice();
		prevRecords.push({
			type: 'Income',
			amount: amount,
			category: category,
			description: description
		});
		this.setState({
			records: prevRecords
		});
	};

	addExpense = (amount, category, description) => {
		const prevRecords = this.state.records.slice();
		prevRecords.push({
			type: 'Expense',
			amount: amount,
			category: category,
			description: description
		});
		this.setState({
			records: prevRecords
		});
	};

	render() {
		return (
			<div className="App">
				<InsertRecordForm
					addIncome={this.addIncome}
					addExpense={this.addExpense}
				/>
				<DataTable array={this.state.records}></DataTable>
			</div>
		);
	}
}

export default App;
