import { SafeAreaView, Text, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import { AddListButton, ListCard, Tapper } from "../../components";
import { HomeScreenType, ListItemsType } from "../../types";
import { TodoContext } from "../../context/TodoContext";
import { saveList } from "../../db/connection";

const Home = ({ navigation }: any) => {
	const { lists } = useContext<any>(TodoContext);
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
				data={lists}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal
			/>
			<Button title="Get Lists" onPress={() => saveList()} />
		</SafeAreaView>
	);
};

export default Home;
