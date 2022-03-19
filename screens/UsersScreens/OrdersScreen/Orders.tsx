import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import OrderItem from '../../../components/OrderItem';
import images from '../../../constants/Images';
import { accouontProp } from '../../../Types';
import { styles } from './styles';

const Order = ({ navigation }: accouontProp) => {
	return (
		<View style={styles.main}>
			<Header title="Orders" navigation={navigation} />

			<ScrollView style={styles.contentCont}>
				<View>
					<OrderItem
						title="Jean top"
						text="this is the description of the order"
						image={images.introScreen}
						price={2000}
						date="23/12/2022"
					/>
					<OrderItem
						title="Jean top"
						text="this is the description of the order"
						image={images.introScreen}
						price={2000}
						date="23/12/2022"
					/>
				</View>
			</ScrollView>
		</View>
	);
};

export default Order;
