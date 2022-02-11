import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import SearchHeader from '../../../components/SearchHeader';
import { homeStackProp } from '../../../Types';
import { styles } from './styles';

const Order = ({ navigation }: homeStackProp) => {
	return (
		<View style={styles.main}>
			{/**HEADER SECTION */}
			<Header title="Order" navigation={navigation} />
			<ScrollView style={styles.contentContainer} />
		</View>
	);
};

export default Order;
