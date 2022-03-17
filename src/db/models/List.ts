import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import Task from "./Task";

@Entity("list")
export default class List {
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	color: string;

	@OneToMany((type) => Task, (task) => task.listId)
	tasks: Task[];
}
