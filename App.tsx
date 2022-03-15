import StackNavigator from "./src/navigations/StackNavigator";
import TodoProvider from "./src/context/TodoContext";

const DATA: any = [
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
];

export default function App() {
	return (
		<TodoProvider>
			<StackNavigator />
		</TodoProvider>
	);
}
