import React, { useContext } from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";
import styles from "./NewTaskForm.style";

const NewTaskForm = ({ parentID, submit }: any) => {
	return (
		<Formik
			initialValues={{ task: "", listId: parentID }}
			onSubmit={(values) => submit(values)}
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
