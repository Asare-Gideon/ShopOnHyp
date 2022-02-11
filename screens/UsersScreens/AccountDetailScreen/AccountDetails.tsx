import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Colors, Sizes } from '../../../constants/Layout';
import Header from '../../../components/Header';
import { accouontProp } from '../../../Types';

const AccountDetails = ({ navigation }: accouontProp) => {
	return (
		<View style={styles.main}>
			<Header title="Details" navigation={navigation} />
			<ScrollView style={styles.contentCont} />
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.primary,
		paddingTop: Sizes.paddingTop
	},
	contentCont: {
		backgroundColor: Colors.warmWhite,
		flex: 0.82
	}
});
export default AccountDetails;
