import React, { useState, useReducer } from "react";

import { initialState, todoReducer } from "../reducers";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [newTodo, setNewTodo] = useState({
        item: "",
        completed: false,
        id: new Date()
    });

    const handleChange = e => {
        setNewTodo({ ...newTodo, item: e.target.value });
    };

    const addNewItem = e => {
        e.preventDefault();
        dispatch({ type: "ADD_ITEM", payload: newTodo });
    };

    return (
        <div>
            <TodoForm
                newTodo={newTodo}
                handleChange={handleChange}
                addNewItem={addNewItem}
            />
            {state.todo.map(item => (
                <TodoItem key={item.id} item={item} />
            ))}
        </div>
    );
};
