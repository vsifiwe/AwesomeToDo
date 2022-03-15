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
