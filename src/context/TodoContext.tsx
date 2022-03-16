// import React from "react";
// const TodoContext = React.createContext([]);
// export const TodoProvider = TodoContext.Provider;
// export default TodoContext;

import React from "react";

export const TodoContext = React.createContext(null);

const TodoProvider: React.FC<{ children: React.ReactNode }> = (props) => {
	const [todos, setTodos] = React.useState([
		{
			id: "1",
			color: "#eb4034",
			name: "Hello world!",
			tasks: [{ id: 1, name: "Manzi", status: false }],
		},
		{
			id: "2",
			color: "#34eb6b",
			name: "Hello world!",
			tasks: [],
		},
		{
			id: "3",
			color: "#5234eb",
			name: "Hello world!",
			tasks: [],
		},
		{
			id: "4",
			color: "#eb34d8",
			name: "Hello world!",
			tasks: [],
		},
		{
			id: "5",
			color: "#34e5eb",
			name: "Hello world!",
			tasks: [],
		},
		{
			id: "6",
			color: "#34e5eb",
			name: "Hello world!",
			tasks: [],
		},
		{
			id: "7",
			color: "#34e5eb",
			name: "Hello world!",
			tasks: [],
		},
	]);

	const saveList = (list: any) => {
		const newTodo: any = {
			id: Math.floor(Math.random() * 10000),
			name: list.name,
			color: list.color,
			tasks: [],
		};
		setTodos([...todos, newTodo]);
	};
	const saveTodo = (parentID: string, values: any) => {
		const newTodo: any = {
			id: Math.floor(Math.random() * 10000),
			name: values.task,
			status: false,
		};
		const myIndex = todos.findIndex((el) => el.id === parentID);
		let newTodos = todos;
		newTodos[myIndex].tasks.push(newTodo);
		setTodos(newTodos);
	};
	const updateTodo = (id: string, tasks: any) => {
		// todos.filter((todo: any) => {
		// 	if (todo.id === id) {
		// 		todo.status = true;
		// 		setTodos([...todos]);
		// 	}
		// });

		const myIndex = todos.findIndex((el) => el.id == id);
		let newTodos = todos[myIndex];
		console.log(todos[myIndex]);
		// newTodos.tasks = tasks;
		// setTodos(newTodos);
	};
	return (
		<TodoContext.Provider value={{ todos, saveTodo, updateTodo, saveList }}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
