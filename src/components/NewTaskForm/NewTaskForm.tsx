import React, { useContext } from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";
import styles from "./NewTaskForm.style";
import { TodoContext } from "../../context/TodoContext";

const NewTaskForm = ({ parentID }: any) => {
	const { saveTodo } = useContext(TodoContext);

	return (
		<Formik
			initialValues={{ task: "" }}
			// onSubmit={(values) => console.log(values)}
			onSubmit={(values) => saveTodo(parentID, values)}
		>
			{({ handleChange, handleBlur, handleSubmit, values }) => (
				<View style={styles.container}>
					<TextInput
						onChangeText={handleChange("task")}
						onBlur={handleBlur("task")}
						value={values.task}
						style={styles.input}
					/>
					<Button onPress={handleSubmit} title=" + " />
				</View>
			)}
		</Formik>
	);
};

export default NewTaskForm;
