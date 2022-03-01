import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Header from '../../../components/Header';
import { accouontProp } from '../../../Types';
import { styles } from './styles';
import { Rating } from 'react-native-elements';

const ReviewDetail = ({ navigation }: accouontProp) => {
	return (
		<View style={styles.main}>
			<Header title="Details" navigation={navigation} />
			<ScrollView style={styles.contentCont}>
				<View style={styles.mainContent}>
					<View style={styles.ratingCont}>
						<Rating type="star" readonly imageSize={16} style={{ paddingVertical: 5 }} />
						<Text style={styles.date}>12/04/2020</Text>
					</View>
					<View>
						<Text style={styles.headerText}>Gucci Shoe </Text>
						<Text style={styles.text}>
							passage, and going through the cites of the word in classical literature, discovered the
							undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
							Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

export default ReviewDetail;
