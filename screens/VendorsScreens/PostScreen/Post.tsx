import { EvilIcons, Feather } from '@expo/vector-icons';
import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Header from '../../../components/Header';
import TextInput from '../../../components/TextInput';
import images from '../../../constants/Images';
import { Colors } from '../../../constants/Layout';
import { PostStackProps } from '../../../Types';
import { styles } from './styles';

const Post = ({ navigation }: PostStackProps) => {
	return (
		<View style={styles.main}>
			<Header title="Make a post" navigation={navigation} />

			<ScrollView style={styles.contentCont}>
				<TextInput name="Product Name" />
				<TextInput name="Product decription" />
				<TextInput name="Product Price" />
				<Text style={styles.imageText}>Insert Images</Text>

				<View style={styles.imageCont}>
					<View>
						<TouchableOpacity style={styles.closeBtn}>
							<EvilIcons name="close-o" size={22} color={Colors.primary} />
						</TouchableOpacity>
						<Image source={images.items[3]} style={styles.image} />
					</View>
					<View>
						<TouchableOpacity style={styles.closeBtn}>
							<EvilIcons name="close-o" size={22} color={Colors.primary} />
						</TouchableOpacity>
						<Image source={images.items[1]} style={styles.image} />
					</View>
					<TouchableOpacity style={styles.addBtn}>
						<Feather name="camera" size={30} />
					</TouchableOpacity>
				</View>
				<Text style={styles.alert}>Maximun is 4</Text>

				<Button
					title={'Submit Product'}
					containerStyle={styles.submitBtn}
					buttonStyle={{
						backgroundColor: Colors.primary,
						borderRadius: 3
					}}
				/>
			</ScrollView>
		</View>
	);
};

export default Post;
