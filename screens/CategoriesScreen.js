import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
    const renderCategory = (data) => {
        return <CategoryGridTile item={data.item} onItemPressed={() => {
            navigation.navigate('Categories Meals', data.item);
        }} />;
    };
    return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderCategory} />;
};

export default CategoriesScreen;
