import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useContext } from "react";
import { ListItem } from "./components";
import TodoContext from "../../context/TodoContext";

const List = ({ route }: any) => {
	let { id } = route.params;
	const DATA = useContext(TodoContext);
	const list = DATA.find((x) => x.id == id);

	const renderItem = ({ item }: any) => <ListItem item={item} />;

	return (
		<SafeAreaView>
			<Text>0 of 3 Tasks</Text>
			{/* <Text>{id}</Text> */}
			<FlatList
				data={list.tasks}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

export default List;
