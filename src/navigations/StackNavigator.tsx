import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home, List, NewList } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="List" component={List} />
				<Stack.Screen name="NewList" component={NewList} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigator;
