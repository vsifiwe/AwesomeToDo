import { StyleSheet } from "react-native";
import { Dimensions } from "../../styles";

export default StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	input: {
		width: 200,
		borderWidth: 1,
		marginHorizontal: Dimensions.PADDING,
		paddingHorizontal: Dimensions.PADDING_SM,
	},
});
