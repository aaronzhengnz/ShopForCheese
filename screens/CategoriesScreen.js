import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CategoriesScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the Categories Screen</Text>
            <Button
                title="The Category Meals Screen"
                onPress={() => props.navigation.navigate('Categories Meals')}
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

export default CategoriesScreen;