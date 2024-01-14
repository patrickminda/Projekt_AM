import React from 'react';
import { View, StyleSheet } from 'react-native';
import  {LinearGradient} from 'expo-linear-gradient';

const GradientBar = () => {
    return (

    <View style={styles.kreska} > 
        <LinearGradient
            colors={[ '#A77884', "#0F193D" ]}
            style={styles.gradientBar}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
         >
        </LinearGradient>
    </View>
    
    );
};
    
const styles = StyleSheet.create({
    kreska: {
        height: 4,
        width: '100%',
        overflow: 'hidden', 
        marginTop: 5,
      },
    gradientBar: {
        flex: 1,
    },
});
    
export default GradientBar;