import React from "react";
import styled from "styled-components";

const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    width: 300px;
    margin: 1.5rem auto 0;
`;

const Input = styled.input`
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 1rem;
`;

const ButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-evenly;
`;

const Button = styled.button`
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1rem;
    border: 1px solid lightgray;
    cursor: pointer;

    &:hover {
        background: lightgray;
    }
`;

export default ({ newTodo, handleChange, addNewItem, clearCompleted }) => {
    return (
        <Form>
            <label htmlFor="addTodo" />
            <Input
                id="addTodo"
                name="newTodo"
                type="text"
                value={newTodo.item}
                placeholder="What do you need to do?"
                onChange={handleChange}
            />

            <ButtonContainer>
                <Button onClick={addNewItem}>Add item</Button>
                <Button onClick={clearCompleted}>Clear completed</Button>
            </ButtonContainer>
        </Form>
    );
};
