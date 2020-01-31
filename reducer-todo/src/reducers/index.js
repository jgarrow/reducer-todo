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

        default:
            return state;
    }
};
