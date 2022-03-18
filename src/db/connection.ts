import "reflect-metadata";

import { DataSource } from "typeorm";
import { List, Task } from "./models";

const dataSource = new DataSource({
	type: "expo",
	database: "todos.db",
	driver: require("expo-sqlite"),
	entities: [List, Task],
	synchronize: true,
});

export const saveList = async () => {
	console.log("trying to initiate a connection");
	await dataSource.initialize();
	console.log("starting operation");
	let listRepository = dataSource.getRepository(List);
	console.log("creating object");
	let list = new List();
	list.id = 1;
	list.color = "red";
	list.name = "Chuck Norris";

	await listRepository.save(list);
	console.log("done");
};

// export const saveList = () => {
// 	console.log("trying to initiate a connection");
// 	createConnection({
// 		type: "expo",
// 		database: "todos.db",
// 		driver: require("expo-sqlite"),
// 		entities: [List, Task],
// 		synchronize: true,
// 		// logging: false,
// 	})
// 		.then(async (connection) => {
// 			console.log("starting operation");
// 			console.log("creating object");
// 			let list = new List();
// 			list.id = 1;
// 			list.color = "red";
// 			list.name = "Chuck Norris";

// 			let listRepository = connection.getRepository(List);
// 			await listRepository.save(list);
// 			console.log("done");
// 		})
// 		.catch((error) => console.log(error));
// };

// export const getLists = () => {
//     createConnection({
// 		type: "expo",
// 		database: "todos",
// 		driver: require("expo-sqlite"),
// 		entities: [List, Task],
// 		synchronize: true,
// 		logging: false,
// 	})
// 		.then((connection) => {
// 			// here you can start to work with your entities

// 			console.log("starting operation");
// 			console.log("creating object");
// 			let list = new List();
// 			list.id = 1;
// 			list.color = "red";
// 			list.name = "Chuck Norris";

// 			let listRepository = connection.getRepository(List);
// 			listRepository.save(list);
// 			console.log("done");
// 		})
// 		.catch((error) => console.log(error));
// }
