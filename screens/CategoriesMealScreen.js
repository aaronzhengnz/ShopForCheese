import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { StackActions } from '@react-navigation/native';

const CategoriesMealScreen = ({ navigation }) => {
    const popAction = StackActions.pop(1);
    return (
        <View style={styles.screen}>
            <Text>This is the Categories Meal Screen</Text>
            <Button
                title="Go Back"
                onPress={() => navigation.dispatch(popAction)}
            />
            <Button
                title="Go Forward"
                onPress={() => navigation.navigate('Meal Details')}
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

export default CategoriesMealScreen;