import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faHome,
	faUser,
	faSearch,
	faBell,
	faTag,
} from "@fortawesome/free-solid-svg-icons";

const BottomNavPart = () => {
	return (
		<View style={styles.bottomNavBar}>
			<FontAwesomeIcon
				icon={faHome}
				style={styles.icon}
				size={25}
			/>
			<FontAwesomeIcon
				icon={faUser}
				style={styles.icon}
				size={25}
			/>
			<FontAwesomeIcon
				icon={faSearch}
				style={styles.icon}
				size={25}
			/>
			<FontAwesomeIcon
				icon={faBell}
				style={styles.icon}
				size={25}
			/>
			<FontAwesomeIcon
				icon={faTag}
				style={styles.icon}
				size={25}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	bottomNavBar: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	icon: {
		color: "white",
	},
});
export default BottomNavPart;
