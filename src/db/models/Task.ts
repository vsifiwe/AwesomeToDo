import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import List from "./List";

@Entity("task")
export default class Task {
	@PrimaryColumn()
	id: number;

	@Column()
	task: string;

	@Column()
	status: boolean;

	@ManyToOne((type) => List, (list) => list.tasks, {
		cascade: ["insert"],
	})
	listId: List;
}
