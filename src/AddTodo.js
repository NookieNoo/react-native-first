import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState("");
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue("");
        } else {
            Alert.alert("Название todo не должно быть пустым");
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                value={value}
                placeholder="Введите todo..."
                onChangeText={setValue}
                style={styles.input}
                autoCorrect={false}
                autoCapitalize="none"
                // keyboardType='number-pad'
            />
            <Button title="Добавить" onPress={pressHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    input: {
        width: "70%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#3949ab",
    },
});
