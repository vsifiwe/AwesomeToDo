import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useContext } from "react";
import { ListItem } from "./components";
import { TodoContext } from "../../context/TodoContext";
import { NewTaskForm } from "../../components";
import styles from "./List.style";

const List = ({ route }: any) => {
	let { id } = route.params;
	const { todos } = useContext(TodoContext);
	const list = todos.find((x) => x.id == id);

	const renderItem = ({ item }: any) => <ListItem item={item} />;

	return (
		<SafeAreaView style={styles.container}>
			<Text>0 of 3 Tasks</Text>
			{/* <Text>{id}</Text> */}
			<FlatList
				data={list.tasks}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
			<NewTaskForm parentID={id} />
		</SafeAreaView>
	);
};

export default List;
