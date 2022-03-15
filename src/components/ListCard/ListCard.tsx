import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./ListCard.style";

const ListCard = (props: any) => {
	return (
		<Pressable onPress={props.navigate}>
			<View style={[styles.container, { backgroundColor: props.color }]}>
				<Text>FireBase</Text>
				<Text>1</Text>
				<Text>Completed</Text>
				<Text>2</Text>
				<Text>Remaining</Text>
			</View>
		</Pressable>
	);
};

export default ListCard;
