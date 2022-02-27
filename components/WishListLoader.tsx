import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Sizes } from '../constants/Layout';
import Shimmering from './Shimmering';

const WishListLoader = () => {
	return (
		<View style={styles.main}>
			<View style={{ marginLeft: 15 }}>
				<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 20, height: 20, borderRadius: 3 }} />
			</View>
			<View style={styles.image}>
				<View>
					<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 20, height: 150, borderRadius: 3 }} />
					<View style={{ marginTop: 10 }}>
						<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 20, height: 20, borderRadius: 3 }} />
					</View>
					<View
						style={{
							flexDirection: 'row',
							width: Sizes.width / 2 - 20,
							justifyContent: 'space-between',
							marginTop: 10,
							paddingRight: 5
						}}
					>
						<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 90, height: 20, borderRadius: 3 }} />
					</View>
				</View>
				<View>
					<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 20, height: 150, borderRadius: 3 }} />
					<View style={{ marginTop: 10 }}>
						<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 20, height: 20, borderRadius: 3 }} />
					</View>
					<View
						style={{
							flexDirection: 'row',
							width: Sizes.width / 2 - 20,
							justifyContent: 'space-between',
							marginTop: 10,
							paddingRight: 5
						}}
					>
						<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 90, height: 20, borderRadius: 3 }} />
					</View>
				</View>
			</View>
			<View style={styles.image}>
				<View>
					<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 20, height: 150, borderRadius: 3 }} />
					<View style={{ marginTop: 10 }}>
						<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 20, height: 20, borderRadius: 3 }} />
					</View>
					<View
						style={{
							flexDirection: 'row',
							width: Sizes.width / 2 - 20,
							justifyContent: 'space-between',
							marginTop: 10,
							paddingRight: 5
						}}
					>
						<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 90, height: 20, borderRadius: 3 }} />
					</View>
				</View>
				<View>
					<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 20, height: 150, borderRadius: 3 }} />
					<View style={{ marginTop: 10 }}>
						<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 20, height: 20, borderRadius: 3 }} />
					</View>
					<View
						style={{
							flexDirection: 'row',
							width: Sizes.width / 2 - 20,
							justifyContent: 'space-between',
							marginTop: 10,
							paddingRight: 5
						}}
					>
						<Shimmering wrapperStyle={{ width: Sizes.width / 2 - 90, height: 20, borderRadius: 3 }} />
					</View>
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

export default WishListLoader;
