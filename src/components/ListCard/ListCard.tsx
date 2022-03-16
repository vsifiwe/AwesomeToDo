import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./ListCard.style";

const ListCard = ({ item, navigate }: any) => {
	return (
		<Pressable onPress={navigate}>
			<View style={[styles.container, { backgroundColor: item.color }]}>
				<Text style={[styles.text, styles.bold]}>{item.name}</Text>
				<Text style={styles.text}>1</Text>
				<Text style={[styles.text, styles.bold]}>Completed</Text>
				<Text style={styles.text}>2</Text>
				<Text style={[styles.text, styles.bold]}>Remaining</Text>
			</View>
		</Pressable>
	);
};

export default ListCard;
