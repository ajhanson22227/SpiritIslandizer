import {StyleSheet, View } from "react-native";
import Button from "./Button";
import { useState } from "react";
import SpiritViewer from "./SpiritViewer";

import spiritData from "../assets/spirits/spirits.json"

export default function HomePage(){
	const [displaySpirits, setDisplaySpirits] = useState(false);
	const [spirits, setSpirits] = useState(null);

	const generateSpirit = () => {
		const index = Math.floor(Math.random() * spiritData.length);
		setSpirits(spiritData[index]);
		setDisplaySpirits(true);
	}

	return(
		<View style={styles.container}>
			{displaySpirits ?
				<SpiritViewer spirits={spirits} />
				:
				<Button label="Gain a Spirit" onPress={generateSpirit} />
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%'
	},
	footContainer: {
		flex: 1/3,
		alignItems: 'center'
	}
});
