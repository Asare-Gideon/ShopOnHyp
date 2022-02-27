import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Shimmering from './Shimmering';
import { Sizes } from '../constants/Layout';

const FeedsLoader = () => {
	return (
		<View style={styles.main}>
			<View style={{ marginLeft: 15 }}>
				<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 20, height: 20, borderRadius: 3 }} />
			</View>
			<View style={styles.image}>
				<View>
					<Shimmering wrapperStyle={{ width: Sizes.width - 30, height: 170, borderRadius: 3 }} />
				</View>
			</View>
			<View style={styles.image}>
				<View>
					<Shimmering wrapperStyle={{ width: Sizes.width - 30, height: 170, borderRadius: 3 }} />
				</View>
			</View>
			<View style={styles.image}>
				<View>
					<Shimmering wrapperStyle={{ width: Sizes.width - 30, height: 170, borderRadius: 3 }} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		width: Sizes.width,
		height: Sizes.height,
		marginTop: -10,
		alignSelf: 'center'
	},
	image: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		paddingRight: 10,
		paddingLeft: 10
	}
});

export default FeedsLoader;
