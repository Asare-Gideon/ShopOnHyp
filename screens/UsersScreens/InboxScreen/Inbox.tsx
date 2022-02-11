import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Colors, Sizes } from '../../../constants/Layout';
import { accouontProp } from '../../../Types';
import Header from '../../../components/Header';

const Inbox = ({ navigation }: accouontProp) => {
	return (
		<View style={styles.main}>
			<Header title="Inbox" navigation={navigation} />
			<ScrollView style={styles.contentCont}>
				<View>
					<Text>hello there</Text>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		paddingTop: Sizes.paddingTop,
		backgroundColor: Colors.primary
	},
	contentCont: {
		flex: 0.82,
		backgroundColor: Colors.warmWhite
	}
});

export default Inbox;
