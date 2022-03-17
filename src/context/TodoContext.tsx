import React, { useState } from "react";

export const TodoContext = React.createContext(null);
import { ListType, TodoType } from "../types";

const TodoProvider: React.FC<{ children: React.ReactNode }> = (props) => {
	const [lists, setLists] = useState<ListType[]>([]);
	const [todos, setTodos] = useState<TodoType[]>([]);

	const saveList = (list: ListType) => {
		const newList: ListType = {
			id: Math.floor(Math.random() * 10000),
			name: list.name,
			color: list.color,
		};
		setLists([...lists, newList]);
	};

	const saveTodo = (values: TodoType) => {
		const newTodo: TodoType = {
			id: Math.floor(Math.random() * 10000),
			task: values.task,
			status: false,
			listId: values.listId,
		};

		setTodos([...todos, newTodo]);
	};

	const updateTodo = (id: number) => {
		todos.filter((t: TodoType) => {
			if (t.id == id) {
				t.status = !t.status;
			}
			setTodos([...todos]);
		});
	};

	const deleteTodo = (id: number) => {
		let newTodos = todos.filter((t: TodoType) => {
			return t.id !== id;
		});
		setTodos(newTodos);
	};

	const values: any = {
		lists,
		todos,
		saveTodo,
		updateTodo,
		saveList,
		deleteTodo,
	};
	return (
		<TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
	);
};

export default TodoProvider;
