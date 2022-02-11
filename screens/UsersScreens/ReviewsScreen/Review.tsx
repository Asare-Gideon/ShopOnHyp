import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CompletedReviews from '../../../components/CompletedReviews';
import Header from '../../../components/Header';
import PendingReviews from '../../../components/PendingReviews';
import { Colors } from '../../../constants/Layout';
import { accouontProp } from '../../../Types';
import { styles } from './style';

const Review = ({ navigation }: accouontProp) => {
	const [ nav, setNav ] = React.useState({
		pending: true,
		completed: false
	});
	const handlePending = () => {
		setNav({
			completed: false,
			pending: true
		});
	};
	const handleComplete = () => {
		setNav({
			pending: false,
			completed: true
		});
	};

	return (
		<View style={styles.main}>
			{/** HEADER SECTION */}
			<Header title="Reviews" navigation={navigation} />
			<View style={styles.nav}>
				<TouchableOpacity onPress={handlePending}>
					<Text
						style={[
							styles.navText,
							{
								borderBottomWidth: nav.pending ? 4 : 0,
								color: nav.pending ? Colors.primary : Colors.darkgray
							}
						]}
					>
						Pending Reviews
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={handleComplete}>
					<Text
						style={[
							styles.navText,
							{
								borderBottomWidth: nav.completed ? 4 : 0,
								color: nav.completed ? Colors.primary : Colors.darkgray
							}
						]}
					>
						completed Reviews
					</Text>
				</TouchableOpacity>
			</View>

			<ScrollView style={styles.contentCont}>
				{nav.pending ? <PendingReviews /> : nav.completed ? <CompletedReviews /> : null}
			</ScrollView>
		</View>
	);
};

export default Review;
