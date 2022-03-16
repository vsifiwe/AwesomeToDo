import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import { ListItem } from "./components";
import { TodoContext } from "../../context/TodoContext";
import { NewTaskForm } from "../../components";
import styles from "./List.style";

const List = ({ route }: any) => {
	let { id } = route.params;
	const { todos, saveTodo, updateTodo } = useContext(TodoContext);
	const list = todos.find((x) => x.id == id);
	const [tasks, setTasks] = useState(list.tasks);
	const handleSubmit = (task: any) => {
		const newTodo: any = {
			id: Math.floor(Math.random() * 10000),
			name: task.task,
			status: false,
		};
		setTasks([...tasks, newTodo]);
		saveTodo(id, task);
	};

	const handleUpdate = (id: string) => {
		const task = tasks.find((x) => x.id == id);
		task.status = !task.status;
		const myIndex = tasks.findIndex((el) => el.id === id);
		let newTasks = tasks;
		newTasks[myIndex] = task;
		updateTodo(id, newTasks);
	};

	const handleDelete = (id: string) => {
		let newTasks = tasks.filter((value) => {
			return value.id !== id;
		});
		setTasks(newTasks);
	};

	const renderItem = ({ item }: any) => (
		<ListItem item={item} update={handleUpdate} handleDelete={handleDelete} />
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
