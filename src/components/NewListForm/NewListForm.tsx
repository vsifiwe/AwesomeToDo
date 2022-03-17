import React, { useContext } from "react";
import styles from "./NewListForm.style";
import { Button, Pressable, TextInput, View } from "react-native";
import { Formik } from "formik";
import { TodoContext } from "../../context/TodoContext";
import { ColorButton } from "./components";

const NewListForm = () => {
	const { saveList } = useContext<any>(TodoContext);
	return (
		<Formik
			initialValues={{ name: "", color: "blue" }}
			onSubmit={(values) => saveList(values)}
		>
			{({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
				<View style={styles.container}>
					<TextInput
						onChangeText={handleChange("name")}
						onBlur={handleBlur("name")}
						value={values.name}
						style={styles.input}
						placeholder="List Name ?"
					/>
					<View style={styles.buttons}>
						<Pressable onPress={() => setFieldValue("color", "#00ee00")}>
							<ColorButton color="#00ee00" />
						</Pressable>
						<Pressable onPress={() => setFieldValue("color", "blue")}>
							<ColorButton color="blue" />
						</Pressable>
						<Pressable onPress={() => setFieldValue("color", "red")}>
							<ColorButton color="red" />
						</Pressable>
						<Pressable onPress={() => setFieldValue("color", "pink")}>
							<ColorButton color="pink" />
						</Pressable>
					</View>
					<Button onPress={handleSubmit} title="Submit" color={values.color} />
				</View>
			)}
		</Formik>
	);
};

export default NewListForm;
