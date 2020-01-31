import React, { useReducer } from "react";

import { initialState, todoReducer } from "../reducers";
import TodoItem from "./TodoItem";

export default () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div>
            {state.todo.map(item => (
                <TodoItem item={item} />
            ))}
        </div>
    );
};
