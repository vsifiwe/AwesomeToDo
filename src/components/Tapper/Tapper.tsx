import { View, Text, Pressable } from "react-native";
import React from "react";
import { ButtonProps } from "../../types";
import styles from "./Tapper.style";

const Tapper = (props: ButtonProps) => {
	return (
		<Pressable onPress={props.onPress}>
			<View style={styles.center}>
				<View style={styles.button_container}>
					<Text style={styles.text}>+</Text>
				</View>
				<Text>Add List</Text>
			</View>
		</Pressable>
	);
};

export default Tapper;
