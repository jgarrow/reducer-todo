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
            const todos = [...state.todo];
            const updatedItem = { ...todos[action.payload] };
            updatedItem.completed = !updatedItem.completed;
            todos[action.payload] = updatedItem;

            return {
                ...state,
                todo: todos
            };

        default:
            return state;
    }
};
