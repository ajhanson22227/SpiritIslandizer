import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Images from "./images";

export default function SpiritViewer({spirits}){
	return(
		<View style={styles.cardContainer}>
			<View style={styles.card}>
				<View style={styles.cardTitleContainer}>
					<Text style={styles.cardTitle}>{spirits.Name}</Text>
				</View>
				<View style={styles.cardComplexity}>
					<Text style={styles.cardComplexityLabel}>{spirits.Complexity.Complexity}</Text>
				</View>
				<View style={styles.cardImageContainer}>
					<Image style={styles.cardImage} source={Images[spirits.ImageName]}/>
				</View>
				<View style={styles.cardDescriptionContainer}>
					<Text style={styles.cardDescription}>{spirits.Description}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		width: 300,
		justifyContent: 'center',
	},
	card: {
		paddingTop: 10,
		borderWidth: 2,
		borderColor: '#fff',
		backgroundColor: '#ca9a7a'
	},
	cardTitleContainer:{
		borderWidth: 1,
		borderColor: '#000',
		height: 40,
		justifyContent: 'center',
		borderRadius: 5,
		marginLeft: 5,
		marginRight: 5
	},
	cardTitle: {
		color: '#000',
		fontSize: 16,
		marginLeft: 10,
	},
	cardComplexity:{
		paddingRight: 10,
		alignItems: 'flex-end',
		color: '#000'
	},
	cardComplexityLabel:{
		borderColor: '#000'
	},
	cardImageContainer: {
		alignItems: 'center',
		shadowOffset: {width: 0, height: 2},
		shadowColor: '#253a60',
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4
	},
	cardImage: {
		width: '95%',
		height: 256,
		resizeMode: 'stretch',
		borderWidth: 2,
		borderColor: '#253a60',
		borderRadius: 5
	},
	cardDescriptionContainer:{
		marginTop: 10,
		marginBottom: 10,
		borderWidth: 2,
		borderColor: '#b62813',
		height: 150,
		width: '95%',
		backgroundColor: '#e0bfa4',
		alignSelf: 'center'
	},
	cardDescription: {
		color: '#000',
		paddingLeft: 10,
		paddingTop: 10
	}
});
