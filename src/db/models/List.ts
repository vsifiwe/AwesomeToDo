import { Entity, Column, OneToMany, PrimaryColumn } from "typeorm";
import Task from "./Task";

@Entity({ name: "list" })
export default class List {
	@PrimaryColumn("int")
	id: number;

	@Column("text", { nullable: true })
	name: string;

	@Column("text", { nullable: true })
	color: string;

	// @OneToMany((type) => Task, (task) => task.listId)
	// tasks: Task[];
}
