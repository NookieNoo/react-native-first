import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function TodoScreen({goBack, todo}) {
    return (
        <View>
            <Text>{todo.title}</Text>
            <Button title="Назад" onPress={goBack}/>
        </View>
    )
}

const styles = StyleSheet.create({})
