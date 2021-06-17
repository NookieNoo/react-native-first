import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from '../components/Todo'

export default function MainScreen({addTodo, todos, removeTodo, openTodo}) {
    return (
        <View>
            <AddTodo onSubmit={addTodo} />
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
