import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CategoriesMealScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>This is the Categories Meal Screen</Text>
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