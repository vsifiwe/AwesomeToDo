import { Text, SafeAreaView, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import { ListItem } from "./components";
import { TodoContext } from "../../context/TodoContext";
import { NewTaskForm } from "../../components";
import styles from "./List.style";
import { TodoType } from "../../types";

const List = ({ route }: any) => {
	let { id } = route.params;
	const { todos, saveTodo, deleteTodo } = useContext<any>(TodoContext);
	const list = todos.filter((t: TodoType) => t.listId == id);
	const [tasks, setTasks] = useState(list);
	const handleSubmit = (task: any) => {
		const newTask: any = {
			id: Math.floor(Math.random() * 10000),
			name: task.task,
			status: false,
			listId: id,
		};
		setTasks([...tasks, newTask]);
		saveTodo(newTask);
	};

	const handleDelete = (id: string) => {
		let newTasks = tasks.filter((value: any) => {
			return value.id !== id;
		});
		setTasks(newTasks);
		deleteTodo(id);
	};

	const renderItem = ({ item }: any) => (
		<ListItem item={item} handleDelete={handleDelete} />
	);

	return (
		<SafeAreaView style={styles.container}>
			<Text>0 of 3 Tasks</Text>
			<FlatList
				data={tasks}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
			/>
			<NewTaskForm parentID={id} submit={handleSubmit} />
		</SafeAreaView>
	);
};

export default List;
