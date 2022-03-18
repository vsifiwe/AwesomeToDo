import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import List from "./List";

@Entity({ name: "task" })
export default class Task {
	@PrimaryColumn("int")
	id: number;

	@Column("text")
	task: string;

	@Column("boolean")
	status: boolean;

	// @ManyToOne((type) => List, (list) => list.tasks, {
	// 	cascade: ["insert"],
	// })
	// listId: List;
}
