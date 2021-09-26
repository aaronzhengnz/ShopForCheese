import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (data) => {
    const renderCategory = (category) => {
        return (<View>
            <Text>{category.index + 1} - {category.item.title}</Text>
        </View>);
    };
    return <FlatList data={CATEGORIES} numcolumns={2} renderItem={renderCategory} />;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoriesScreen;