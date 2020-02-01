import React from "react";

export default ({ newTodo, handleChange, addNewItem, clearCompleted }) => {
    return (
        <form>
            <input
                id="addTodo"
                name="newTodo"
                type="text"
                value={newTodo.item}
                placeholder="What do you need to do?"
                onChange={handleChange}
            />
            <label htmlFor="addTodo">Add new item:</label>

            <button onClick={addNewItem}>Add item to todo list</button>
            <button onClick={clearCompleted}>Clear completed items</button>
        </form>
    );
};
