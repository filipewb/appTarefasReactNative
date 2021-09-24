import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

function TaskList({ data, deleteItem, editItem }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => deleteItem(data.key)}
            >
                <Feather
                    name="trash"
                    color="#FFF"
                    size={20}
                />
            </TouchableOpacity>

            <View style={{ paddingRight: 10 }}>
                <TouchableWithoutFeedback
                    onPress={() => editItem(data)}
                >
                    <Text style={styles.nomeTarefa}>{data.nome}</Text>
                </TouchableWithoutFeedback>
            </View>

        </View>
    )
}

export default TaskList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#121212',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4,
    },
    nomeTarefa: {
        color: '#FFF',
        paddingRight: 10,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})