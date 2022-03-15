import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./ListItem.style";
import Checkbox from "expo-checkbox";

const ListItem = ({ item }: any) => {
	const [isChecked, setChecked] = useState(false);

	return (
		<View style={styles.container}>
			<Checkbox value={item.status} onValueChange={setChecked} />
			<Text>{item.name}</Text>
		</View>
	);
};

export default ListItem;
