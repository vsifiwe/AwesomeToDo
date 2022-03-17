import "reflect-metadata";

import { createConnection, getRepository } from "typeorm";

import React, { useCallback } from "react";
import { List, Task } from "./models";

let defaultConnection: any = null;

const setupConnection = useCallback(async () => {
	try {
		const connection = await createConnection({
			type: "react-native",
			database: "test",
			location: "default",
			logging: ["error", "query", "schema"],
			synchronize: true,
			entities: [Task, List],
		});
		defaultConnection = connection;
	} catch (error) {
		console.log(error);
	}
}, []);

export const getLists = useCallback(async () => {
	if (!defaultConnection) {
		await setupConnection();
	}
	const listRepository = getRepository(List);
	let result = await listRepository.find();
	if (result.length === 0) {
		const list = new List();
		list.color = "red";
		list.name = "Chuck Norris";
		await listRepository.save(list);
		result = await listRepository.find();
	}
	console.log(result);
}, []);
