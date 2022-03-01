import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useAppDispatch } from '../../../app/reduxHooks/hooks';
import CartsItem from '../../../components/CartsItem';
import { itemsData } from '../../../constants/Data';
import images from '../../../constants/Images';
import { Colors, Fonts } from '../../../constants/Layout';
import { setBottomNav } from '../../../features/utilitySlice/bottomSlice';
import { homeStackProp } from '../../../Types';
import { styles } from './styles';

const Carts = ({ navigation }: homeStackProp) => {
	const dispatch = useAppDispatch();
	const [ isCarts, setIsCarts ] = useState<boolean>(true);

	const handleNav = () => {
		dispatch(setBottomNav(true));
		navigation.navigate('Order');
	};
	useEffect(() => {
		navigation.addListener('focus', () => {
			dispatch(setBottomNav(false));
		});
	}, []);

	const renderCartsItem = ({ item }: any) => (
		<CartsItem title={item.title} image={item.image} text={item.text} price={item.price} navigation={navigation} />
	);
	if (isCarts) {
		return (
			<View style={styles.main}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Shopping Carts</Text>
				</View>

				<ScrollView style={styles.contentContainer}>
					<FlatList
						data={itemsData}
						renderItem={renderCartsItem}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ paddingBottom: 10 }}
					/>
					<View style={styles.bottomContainer}>
						<View>
							<Text style={styles.total}>Total</Text>
							<Text style={styles.amount}>GH₵ 1030</Text>
						</View>
						<TouchableOpacity style={styles.proceedBtn} onPress={handleNav}>
							<Text style={styles.proceedText}>Proceed</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		);
	} else {
		return (
			<View style={styles.main}>
				<View
					style={{
						width: '100%',
						height: '100%',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<View>
						<Image source={images.carts} style={styles.img} />
						<View>
							<Text
								style={{
									...Fonts.body3,
									color: Colors.deepDarkGray,
									marginLeft: 4
								}}
							>
								No Carts Added
							</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
};

export default Carts;
