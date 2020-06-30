export const initialState = {
    todo: [
        {
            item: "Learn about reducers",
            completed: false,
            id: 3892987589
        }
    ]
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                todo: state.todo.concat(action.payload)
            };
        case "TOGGLE_COMPLETED":
            const item = action.payload;
            const todos = [...state.todo];
            const payloadIndex = todos.findIndex(
                element => element.id === item.id
            );

            const updatedItem = { ...todos[payloadIndex] };
            updatedItem.completed = !updatedItem.completed;
            todos[payloadIndex] = updatedItem;

            return {
                ...state,
                todo: todos
            };

        case "CLEAR_COMPLETED":
            const uncompletedItems = state.todo.filter(
                item => item.completed === false
            );

            return {
                ...state,
                todo: uncompletedItems
            };
        default:
            return state;
    }
};
