import React, { useState, useReducer } from "react";
import styled from "styled-components";

import { initialState, todoReducer } from "../reducers";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
`;

export default () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [newTodo, setNewTodo] = useState({
        item: "",
        completed: false,
        id: Date.now()
    });

    const handleChange = e => {
        setNewTodo({ ...newTodo, item: e.target.value });
    };

    const addNewItem = e => {
        e.preventDefault();
        dispatch({ type: "ADD_ITEM", payload: newTodo });
        setNewTodo({
            item: "",
            completed: false,
            id: Date.now()
        });
    };

    const handleCompleteCheck = item => {
        dispatch({ type: "TOGGLE_COMPLETED", payload: item });
    };

    const clearCompleted = e => {
        e.preventDefault();
        dispatch({ type: "CLEAR_COMPLETED" });
    };

    return (
        <div>
            <TodoForm
                newTodo={newTodo}
                handleChange={handleChange}
                addNewItem={addNewItem}
                clearCompleted={clearCompleted}
            />
            <TodoContainer>
                {state.todo.map(item => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        handleCompleteCheck={handleCompleteCheck}
                    />
                ))}
            </TodoContainer>
        </div>
    );
};
