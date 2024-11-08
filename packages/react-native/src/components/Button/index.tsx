import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, FlexAlignType, StyleSheet } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
    children: string;
    onPress: () => void;
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 10,
    },
    text: {
        fontSize: 20,
    },
})
    

export const Button = (props: ButtonProps) => {
    const { children, onPress, style, ...rest } = props;
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.button} {...rest}>
           <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
    }


