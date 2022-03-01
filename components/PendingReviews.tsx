import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Colors, Fonts, Sizes } from '../constants/Layout';
import { itemsData } from '../constants/Data';
import { AntDesign, Entypo } from '@expo/vector-icons';

const PendingReviews = ({ navigation }: any) => {
	const handleNav = (): void => {
		navigation.navigate('Review');
	};
	return (
		<View style={styles.main}>
			<ScrollView style={styles.contentContainer}>
				<FlatList
					data={itemsData}
					keyExtractor={(item) => item.id}
					contentContainerStyle={{ paddingBottom: 10 }}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={handleNav}
							style={{
								width: '100%',
								backgroundColor: Colors.white,
								borderRadius: 10,
								padding: 5,
								flexDirection: 'row',
								marginBottom: 10,
								elevation: 2
							}}
						>
							<View style={{ flex: 0.2, height: 85 }}>
								<Image
									source={item.image}
									style={{
										width: '100%',
										height: '100%',
										borderRadius: 4
									}}
								/>
							</View>
							<View
								style={{
									marginLeft: 13,
									flex: 0.8
								}}
							>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between'
									}}
								>
									<View>
										<Text style={{ ...Fonts.body2 }}>
											{item.title.length > 17 ? (
												item.title.substr(0, 17).concat('...')
											) : (
												item.title
											)}
										</Text>
										<Text style={{ color: Colors.deepDarkGray }}>
											{item.text.length > 36 ? item.text.substr(0, 36).concat('...') : item.text}
										</Text>
									</View>
									<TouchableOpacity
										style={{
											paddingRight: 10,
											paddingTop: 4
										}}
									>
										<AntDesign name="delete" size={20} />
									</TouchableOpacity>
								</View>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										padding: 4
									}}
								>
									<Text
										style={{
											...Fonts.body2,
											color: Colors.darkgray
										}}
									>
										GH₵ {item.price}
									</Text>
									<View
										style={{
											flexDirection: 'row',
											paddingLeft: 5,
											alignItems: 'center'
										}}
									>
										<Text
											style={{
												...Fonts.body3,
												color: Colors.darkgray
											}}
										>
											12/04/2020
										</Text>
									</View>
								</View>
							</View>
						</TouchableOpacity>
					)}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.warmWhite,
		height: '100%',
		width: Sizes.width
	},
	contentContainer: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10
	}
});
export default PendingReviews;
