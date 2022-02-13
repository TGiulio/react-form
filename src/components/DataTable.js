import React from 'react';

class DataTable extends React.Component {
	render() {
		let fields = [];
		let array = [];
		if (!!this.props.array[0]) {
			fields = Object.keys(this.props.array[0]);
			array = this.props.array;
		} else {
		}
		return (
			<table>
				<thead>
					<tr>
						{fields.map((field) => (
							<th key={field} style={{ padding: 10 + 'px ' + 50 + 'px' }}>
								{field}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{array.map((object, index) => {
						return (
							<tr key={index + object.description}>
								{fields.map((key, index) => (
									<td key={object[fields[index]]} align={'center'}>
										{object[fields[index]]}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

export default DataTable;
