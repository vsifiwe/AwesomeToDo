import { SafeAreaView, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { AddListButton, ListCard, Tapper } from "../../components";
import { HomeScreenType, ListItemsType } from "../../types";
import { TodoContext } from "../../context/TodoContext";

const Home = ({ navigation }: any) => {
	const { todos } = useContext(TodoContext);
	const renderItem = ({ item }: any) => (
		<ListCard
			item={item}
			navigate={() => navigation.navigate("List", { id: item.id })}
		/>
	);
	return (
		<SafeAreaView>
			<Text>To do Lists</Text>
			<Tapper onPress={() => navigation.navigate("NewList")} />
			<FlatList
				data={todos}
				renderItem={renderItem}
				// keyExtractor={(item) => item.id}
				horizontal
			/>
		</SafeAreaView>
	);
};

export default Home;
