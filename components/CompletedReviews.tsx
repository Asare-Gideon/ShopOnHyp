import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Rating } from 'react-native-elements';
import { Colors, Fonts } from '../constants/Layout';

const CompletedReviews = ({ navigation }: any) => {
	const handleNav = (): void => {
		navigation.navigate('ReviewDetails');
	};
	const data = [
		{
			id: '1',
			name: 'Gucci shoe',
			comment: 'this is awsome this is awesome  this is awsome this is awesomea  this is awsome this is awesome'
		},
		{
			id: '1e',
			name: 'Gucci shoe',
			comment: 'this is awsome this is awesome'
		},
		{
			id: '1k',
			name: 'Gucci shoe',
			comment: 'this is awsome this is awesome'
		},
		{
			id: '1d',
			name: 'Gucci shoe',
			comment: 'this is awsome this is awesome'
		},
		{
			id: '1s',
			name: 'Gucci shoe',
			comment: 'this is awsome this is awesome'
		},
		{
			id: '1l',
			name: 'Gucci shoe',
			comment: 'this is awsome this is awesome'
		},
		{
			id: '2',
			name: 'Good product',
			comment: 'this is awsome this is awesome'
		}
	];
	return (
		<View style={styles.main}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				contentContainerStyle={{ paddingBottom: 20 }}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.btnCont} onPress={handleNav}>
						<View style={styles.dateCont}>
							<Rating type="star" readonly imageSize={12} style={{ paddingVertical: 5 }} />
							<View>
								<Text style={styles.date}>23/12/2020</Text>
							</View>
						</View>
						<View>
							<Text style={styles.text}>{item.name}</Text>
							<Text style={styles.comment}>
								{item.comment.length > 50 ? (
									item.comment.substr(0, 50).concat('....')
								) : (
									item.comment
								)}{' '}
							</Text>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		width: '100%',
		paddingTop: 10,
		paddingLeft: 5,
		paddingRight: 5
	},
	dateCont: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 5
	},
	text: {
		...Fonts.body3
	},
	comment: {
		...Fonts.body4,
		paddingBottom: 5
	},
	btnCont: {
		backgroundColor: Colors.white,
		padding: 5,
		marginBottom: 8
	},
	date: {
		...Fonts.body3,
		color: Colors.deepDarkGray
	}
});

export default CompletedReviews;
