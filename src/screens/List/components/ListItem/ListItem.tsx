import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./ListItem.style";
import Checkbox from "expo-checkbox";
import { Colors } from "../../../../styles";

const ListItem = ({ item, update, handleDelete }: any) => {
	const [isChecked, setChecked] = useState(item.status);

	const handleUpdate = (id: string) => {
		update(id);
		setChecked(!isChecked);
	};

	return (
		<View style={styles.container}>
			<Checkbox value={isChecked} onValueChange={() => handleUpdate(item.id)} />
			<Pressable
				onLongPress={() => {
					handleDelete(item.id);
				}}
			>
				<Text
					style={
						isChecked
							? {
									textDecorationLine: "line-through",
									color: Colors.GRAY,
							  }
							: {
									color: "black",
							  }
					}
				>
					{item.name}
				</Text>
			</Pressable>
		</View>
	);
};

export default ListItem;
