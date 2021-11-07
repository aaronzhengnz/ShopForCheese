import React from 'react';
import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';

const MealCard = ({ title, duration, affordability, complexity, imageUrl }) => {
    return (
        <View>
            <Pressable>
                <View>
                    <ImageBackground
                        source={{
                            uri: imageUrl,
                        }}
                        style={styles.backgroundImage}>
                        <Text>{title}</Text>
                    </ImageBackground>
                </View>
                <View>
                    <Text>{duration}m</Text>
                    <Text> {affordability}</Text>
                    <Text>{complexity}</Text>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    }
});

export default MealCard;