import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

const pushAction = StackActions.push('Favourites');
const MealDetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>This is the Meal Details Screen</Text>
            <Button
                title="Back to Catagories"
                onPress={() => navigation.dispatch(StackActions.popToTop())}
            />
            <Button 
                title="Next Page"
                onPress={() => navigation.dispatch(pushAction)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealDetailsScreen;
