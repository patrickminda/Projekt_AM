import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import GradientBarShort from './GradientBarShort';

const VerticalGradientBar = ({value}) => {
  return (
    <View style={styles.container} >
        <Text style={styles.textValue}>{value}</Text>
        <GradientBarShort/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        marginTop: 15,
    },
    textValue:{
        fontSize: 24,
        color: '#fff',
    }

});

export default VerticalGradientBar;
