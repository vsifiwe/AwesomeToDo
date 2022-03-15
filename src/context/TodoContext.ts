import React from "react";
const TodoContext = React.createContext([]);
export const TodoProvider = TodoContext.Provider;
export default TodoContext;

// import * as React from "react";

// export const TodoContext = React.createContext(null);

// const TodoProvider: any = ({ children }) => {
// 	const [todos, setTodos] = React.useState([
// 		{
// 			id: 1,
// 			title: "post 1",
// 			description: "this is a description",
// 			status: false,
// 		},
// 		{
// 			id: 2,
// 			title: "post 2",
// 			description: "this is a description",
// 			status: true,
// 		},
// 	]);
// 	const saveTodo = (todo: any) => {
// 		const newTodo: any = {
// 			id: Math.random(), // not really unique - but fine for this example
// 			title: todo.title,
// 			description: todo.description,
// 			status: false,
// 		};
// 		setTodos([...todos, newTodo]);
// 	};
// 	const updateTodo = (id: number) => {
// 		todos.filter((todo: any) => {
// 			if (todo.id === id) {
// 				todo.status = true;
// 				setTodos([...todos]);
// 			}
// 		});
// 	};
// 	return (
// 		<TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
// 			{children}
// 		</TodoContext.Provider>
// 	);
// };

// export default TodoProvider;
