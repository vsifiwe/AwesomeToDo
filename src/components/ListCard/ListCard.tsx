import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./ListCard.style";

const ListCard = ({ item, navigate }: any) => {
	return (
		<Pressable onPress={navigate}>
			<View style={[styles.container, { backgroundColor: item.color }]}>
				<Text>{item.name}</Text>
				<Text>1</Text>
				<Text>Completed</Text>
				<Text>2</Text>
				<Text>Remaining</Text>
			</View>
		</Pressable>
	);
};

export default ListCard;
