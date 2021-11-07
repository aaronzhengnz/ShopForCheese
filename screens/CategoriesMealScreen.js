import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import MealCard from '../components/MealCard'

const CategoriesMealScreen = ({ route }) => {
    const categoryID = route.params.id;
    const meals = MEALS.filter((meal) => {
        return meal.categoryIds.includes(categoryID);
    });

    const renderMealItems = (data) => {
        return (
            <MealCard title={data.item.title}
                duration={data.item.duration}
                complexity={data.item.complexity}
                affordability={data.item.affordability}
                imageUrl={data.item.imageUrl} />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList data={meals} renderItem={renderMealItems} />
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