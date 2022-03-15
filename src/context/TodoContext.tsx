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
			id: Math.random(),
			name: list.name,
			color: list.color,
			tasks: [],
		};
		setTodos([...todos, newTodo]);
	};
	const saveTodo = (parentID: string, values: any) => {
		console.log(values);
	};
	const updateTodo = (id: number) => {
		todos.filter((todo: any) => {
			if (todo.id === id) {
				todo.status = true;
				setTodos([...todos]);
			}
		});
	};
	return (
		<TodoContext.Provider value={{ todos, saveTodo, updateTodo, saveList }}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
