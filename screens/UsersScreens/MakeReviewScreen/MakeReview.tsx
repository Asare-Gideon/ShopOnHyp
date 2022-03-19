import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './Styles';
import Header from '../../../components/Header';
import { accouontProp } from '../../../Types';
import { Button, Input, Rating } from 'react-native-elements';
import { Colors } from '../../../constants/Layout';

const MakeReview = ({ navigation }: accouontProp) => {
	return (
		<View style={styles.main}>
			{/** header */}
			<Header title="Make a Review" navigation={navigation} />
			<ScrollView style={styles.contentCont}>
				<View>
					<Text style={styles.headerText}>Reviews are public and include your account and device info</Text>
				</View>
				<View>
					<Rating
						tintColor={Colors.primary}
						ratingColor={Colors.primary}
						ratingCount={5}
						fractions={1}
						startingValue="{0}"
						imageSize={40}
					/>
				</View>
				<View style={styles.input}>
					<Input placeholder="Describe your experience" />
				</View>

				<Button
					title={'Submit'}
					buttonStyle={{
						backgroundColor: Colors.primary,
						borderRadius: 20
					}}
					containerStyle={{
						width: '80%',
						marginHorizontal: 50,
						marginVertical: 10,
						alignSelf: 'center'
					}}
				/>
			</ScrollView>
		</View>
	);
};

export default MakeReview;
