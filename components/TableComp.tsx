import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const TableComp = () => {
	const [ data, setData ] = React.useState({
		tableHead: [ 'Name', 'Gmail', 'Number', 'Id' ],
		tableData: [
			[ 'Aka Ebenezer', 'asaregid333@gmail.com', '055343444333', 'ddfee334444' ],
			[ 'Mansah Siaw', 'asaregid333@gmail.com', '055343444333', 'ddfee334444' ],
			[ 'Burukutu Adanta', 'asaregid333@gmail.com', '055343444333', 'ddfee334444' ],
			[ 'John Brat', 'asaregid333@gmail.com', '055343444333', 'ddfee334444' ],
			[ 'Asare Gideon', 'asaregid333@gmail.com', '055343444333', 'ddfee334444' ]
		]
	});
	return (
		<View style={styles.main}>
			<Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
				<Row
					data={data.tableHead}
					widthArr={[ 120, 190, 130, 120 ]}
					style={styles.head}
					textStyle={styles.text}
				/>
				<Rows data={data.tableData} widthArr={[ 120, 190, 130, 120 ]} textStyle={styles.text} />
			</Table>
		</View>
	);
};
const styles = StyleSheet.create({
	main: {
		width: '100%'
	},
	container: {
		flex: 1,
		padding: 16,
		paddingTop: 30,
		backgroundColor: '#fff'
	},
	head: {
		height: 40,
		backgroundColor: '#f1f8ff'
	},
	text: {
		margin: 6
	}
});
export default TableComp;
