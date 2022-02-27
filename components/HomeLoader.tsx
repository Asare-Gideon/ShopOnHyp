import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Shimmering from './Shimmering';
import { Colors, Sizes } from '../constants/Layout';

const HomeLoader = () => {
	return (
		<View style={styles.main}>
			<View style={styles.navCont}>
				<View style={styles.navList}>
					<Shimmering wrapperStyle={{ width: 70, height: 14, borderRadius: 3 }} />
				</View>
				<View style={styles.navList}>
					<Shimmering wrapperStyle={{ width: 70, height: 14, borderRadius: 3 }} />
				</View>
				<View style={styles.navList}>
					<Shimmering wrapperStyle={{ width: 70, height: 14, borderRadius: 3 }} />
				</View>
				<View style={styles.navList}>
					<Shimmering wrapperStyle={{ width: 70, height: 14, borderRadius: 3 }} />
				</View>
			</View>
			<View style={styles.slider}>
				<View>
					<Shimmering wrapperStyle={{ width: Sizes.width - 30, height: 120, borderRadius: 3 }} />
				</View>
			</View>
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
						<Shimmering wrapperStyle={{ width: 30, height: 30, borderRadius: 30 }} />
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
						<Shimmering wrapperStyle={{ width: 30, height: 30, borderRadius: 30 }} />
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
						<Shimmering wrapperStyle={{ width: 30, height: 30, borderRadius: 30 }} />
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
						<Shimmering wrapperStyle={{ width: 30, height: 30, borderRadius: 30 }} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default HomeLoader;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		width: '100%',
		marginTop: -20
	},
	image: {
		paddingLeft: 15,
		paddingRight: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10
	},
	navCont: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 8,
		paddingRight: 8
	},
	navList: {},
	slider: {
		alignSelf: 'center',
		marginTop: 15,
		marginBottom: 15
	}
});
