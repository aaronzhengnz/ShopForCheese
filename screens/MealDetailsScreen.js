import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MealDetailsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>This is the Meal Details Screen</Text>
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