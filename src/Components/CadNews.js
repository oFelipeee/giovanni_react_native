import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function CadNews() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = () => {

        // Aqui voce epode linkar com o envio dos dados 
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Senha:", senha);
    }


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite seu email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Digite sua senha'
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}

            />
            <Button title='Enviar' onPress={handleSubmit} />
            {nome && email && senha && (
                <Text>
                    Nome: {nome}, Email: {email}, Senha: {senha}
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8
    }
})