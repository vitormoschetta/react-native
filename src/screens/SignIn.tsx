import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export function SignIn() {

    const [nome, setNome] = useState('');


    return (
        <View style={{ alignItems: 'center' }}>            
            <Text>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={(value) => setNome(value)}
            />

            <Text>
                Você digitou: {nome}
            </Text>
        </View>
    );
}


export const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 200,
        borderBottomWidth: 2
    }
})