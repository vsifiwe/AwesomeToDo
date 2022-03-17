import { View, Text, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import styles from "./ListItem.style";
import Checkbox from "expo-checkbox";
import { Colors } from "../../../../styles";
import { TodoContext } from "../../../../context/TodoContext";

const ListItem = ({ item, handleDelete }: any) => {
	const [isChecked, setChecked] = useState(item.status);
	const { updateTodo } = useContext<any>(TodoContext);

	const handleUpdate = (id: string) => {
		updateTodo(id);
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
					{item.task}
				</Text>
			</Pressable>
		</View>
	);
};

export default ListItem;
