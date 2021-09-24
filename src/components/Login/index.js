import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'

import firebase from '../../services/firebaseConnection';

function Login({ changeStatus }) {
    const [type, setType] = useState('login');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        if (type === 'login') {
            //aqui faz login
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.uid)
                })
                .catch((error) => {
                    console.log(error);
                    alert('Ops parece que deu algum erro no cadastro.');
                    return;
                })
        } else {
            // aqui cadastra
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    changeStatus(user.user.uid)
                })
                .catch((error) => {
                    console.log(error);
                    alert('Ops parece que tem algo errado para cadastrar.');
                    return;
                })

        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <TextInput
                placeholder="Seu e-mail"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                placeholder="*********"
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity
                style={[styles.handleLogin, { backgroundColor: type === 'login' ? '#3ea6f2' : '#141414' }]}
                onPress={handleLogin}
            >
                <Text style={{ color: 'white', fontSize: 17 }}>
                    {type === 'login' ? 'Acessar' : 'Cadastrar'}
                </Text>

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')}
                style={[styles.handleLogin, { backgroundColor: 'grey' }]}
            >
                <Text style={{ textAlign: 'center' }}>
                    {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}

                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#F2f6fc',
        paddingHorizontal: 10,
    },
    input: {
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 4,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414',
    },
    handleLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        marginBottom: 10,
    }
})
