export type ButtonProps = {
	color?: string;
	onPress: () => void;
	title?: string;
};

export type TaskType = {
	id: string;
	status: boolean;
	title: string;
};

export type ListItemsType = [
	{
		id: string;
		color: string;
		name: string;
		tasks: TaskType[];
	}
];

export type HomeScreenType = {
	navigation: () => void;
};

export type ListType = {
	id: number;
	name: string;
	color: string;
};

export type TodoType = {
	id: number;
	task: string;
	listId: number;
	status: boolean;
};
