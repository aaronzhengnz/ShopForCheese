import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const CategoryGridTile = ({ item, onItemPressed }) => {
    return (
        <Pressable onPress={onItemPressed} style={styles.pressableItem}>
            <View style={{
                ...styles.container,
                backgroundColor: item.color
            }}>
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textAlign: 'right',
        fontFamily: 'AkayaTelivigala_400Regular',
    },
    pressableItem: {
        flex: 1,
        margin: 15,
        height: 130,
    },
    container: {
        flex: 1,
        flexShrink: 2,
        padding: 22,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: '#000000',
    },
});

export default CategoryGridTile;