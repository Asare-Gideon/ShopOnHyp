import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';
import images from '../../../constants/Images';
import { Colors, Fonts, Sizes } from '../../../constants/Layout';
import { ProgressChart } from 'react-native-chart-kit';
import TableComp from '../../../components/TableComp';

const AdminHome = () => {
	const data = {
		labels: [ 'Swim', 'Bike', 'Run' ], // optional
		data: [ 0.4, 0.6, 0.8 ]
	};
	const chartConfig = {
		backgroundGradientFrom: Colors.warmWhite,
		backgroundGradientFromOpacity: 0,
		backgroundGradientTo: Colors.warmWhite,
		backgroundGradientToOpacity: 0.5,
		//color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
		strokeWidth: 2, // optional, default 3
		barPercentage: 0.5,
		useShadowColorFromDataset: false,
		color: (opacity = 1) => `rgba(40, 174, 237, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(85, 85, 85, ${opacity})`
	};

	return (
		<View style={styles.main}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Hi George,</Text>
				<TouchableOpacity>
					<Avatar
						rounded
						containerStyle={{ backgroundColor: Colors.darkgray }}
						size={55}
						title="G"
						source={images.introScreen}
					>
						<Avatar.Accessory size={24} />
					</Avatar>
				</TouchableOpacity>
			</View>
			<ScrollView style={styles.contentCont}>
				<View style={styles.progressbar}>
					<ProgressChart
						data={data}
						width={Sizes.width - 20}
						height={220}
						strokeWidth={16}
						radius={40}
						chartConfig={chartConfig}
						hideLegend={false}
					/>
				</View>
				<FlatList
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					data={[ 0 ]}
					renderItem={({ item }: any) => <TableComp />}
					contentContainerStyle={{ paddingLeft: 5, paddingRight: 5 }}
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		width: Sizes.width,
		backgroundColor: Colors.warmWhite,
		paddingTop: Sizes.paddingTop,
		flex: 1
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 10,
		paddingLeft: 15,
		paddingRight: 15,
		marginBottom: 10
	},
	headerTitle: {
		...Fonts.body1,
		color: Colors.darkgray
	},
	contentCont: {
		marginTop: 10
	},
	progressbar: {
		alignSelf: 'flex-start'
	}
});

export default AdminHome;
